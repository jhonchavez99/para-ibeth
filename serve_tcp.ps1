# Robust Local Web Server with Range and Chunk Streaming support for Audio/Video
$port = 8080
$ip = [System.Net.IPAddress]::Any
$listener = New-Object System.Net.Sockets.TcpListener($ip, $port)
$listener.Server.SetSocketOption([System.Net.Sockets.SocketOptionLevel]::Socket, [System.Net.Sockets.SocketOptionName]::ReuseAddress, $true)
$listener.Start()
Write-Host "Server running at http://192.168.2.8:$port/"

$root = $PSScriptRoot

while ($true) {
    try {
        if ($listener.Pending()) {
            $client = $listener.AcceptTcpClient()
            $client.SendTimeout = 10000
            $client.ReceiveTimeout = 10000
            $stream = $client.GetStream()
            
            $buffer = New-Object byte[] 4096
            $read = $stream.Read($buffer, 0, $buffer.Length)
            if ($read -gt 0) {
                $request = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $read)
                
                if ($request -match "^(GET|HEAD)\s+([^\s\?]*).*HTTP/1\.[01]") {
                    $method = $matches[1]
                    $rawPath = [System.Uri]::UnescapeDataString($matches[2])
                    if ($rawPath -eq "" -or $rawPath -eq "/") { $rawPath = "/index.html" }
                    $filePath = Join-Path $root $rawPath.TrimStart('/').Replace('/', '\')
                    
                    if (Test-Path $filePath -PathType Leaf) {
                        $fileInfo = New-Object System.IO.FileInfo($filePath)
                        $fileLen = $fileInfo.Length
                        $ext = $fileInfo.Extension.ToLower()
                        
                        switch ($ext) {
                            ".html" { $contentType = "text/html; charset=utf-8" }
                            ".css"  { $contentType = "text/css; charset=utf-8" }
                            ".js"   { $contentType = "application/javascript; charset=utf-8" }
                            ".json" { $contentType = "application/json; charset=utf-8" }
                            ".png"  { $contentType = "image/png" }
                            ".jpg"  { $contentType = "image/jpeg" }
                            ".jpeg" { $contentType = "image/jpeg" }
                            ".svg"  { $contentType = "image/svg+xml" }
                            ".mp3"  { $contentType = "audio/mpeg" }
                            ".mp4"  { $contentType = "video/mp4" }
                            default { $contentType = "application/octet-stream" }
                        }
                        
                        # Check Range header for Audio / Video streaming
                        $startByte = 0
                        $endByte = $fileLen - 1
                        $isRange = $false
                        
                        if ($request -match "Range:\s*bytes=(\d+)-(\d*)") {
                            $isRange = $true
                            $startByte = [int64]$matches[1]
                            if ($matches[2] -ne "") {
                                $endByte = [int64]$matches[2]
                            }
                        }
                        
                        if ($isRange) {
                            $contentLen = $endByte - $startByte + 1
                            $header = "HTTP/1.1 206 Partial Content`r`n" +
                                      "Content-Type: $contentType`r`n" +
                                      "Content-Range: bytes $startByte-$endByte/$fileLen`r`n" +
                                      "Content-Length: $contentLen`r`n" +
                                      "Accept-Ranges: bytes`r`n" +
                                      "Access-Control-Allow-Origin: *`r`n" +
                                      "Connection: close`r`n`r`n"
                        } else {
                            $header = "HTTP/1.1 200 OK`r`n" +
                                      "Content-Type: $contentType`r`n" +
                                      "Content-Length: $fileLen`r`n" +
                                      "Accept-Ranges: bytes`r`n" +
                                      "Access-Control-Allow-Origin: *`r`n" +
                                      "Connection: close`r`n`r`n"
                        }
                        
                        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($headerBytes, 0, $headerBytes.Length)
                        
                        $fs = [System.IO.File]::OpenRead($filePath)
                        if ($startByte -gt 0) {
                            $fs.Seek($startByte, [System.IO.SeekOrigin]::Begin) | Out-Null
                        }
                        
                        $chunkSize = 65536
                        $chunkBuf = New-Object byte[] $chunkSize
                        $totalSent = 0
                        $bytesToSend = if ($isRange) { $contentLen } else { $fileLen }
                        
                        while ($totalSent -lt $bytesToSend) {
                            $toRead = [Math]::Min($chunkSize, $bytesToSend - $totalSent)
                            $readNow = $fs.Read($chunkBuf, 0, $toRead)
                            if ($readNow -le 0) { break }
                            $stream.Write($chunkBuf, 0, $readNow)
                            $totalSent += $readNow
                        }
                        $fs.Close()
                    } else {
                        $header = "HTTP/1.1 404 Not Found`r`nContent-Length: 0`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        try { $stream.Write($headerBytes, 0, $headerBytes.Length) } catch { }
                    }
                }
            }
            try { $stream.Flush(); $client.Close() } catch { }
        } else {
            Start-Sleep -Milliseconds 20
        }
    } catch {
        Start-Sleep -Milliseconds 20
    }
}
