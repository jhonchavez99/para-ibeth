# Download final large video script
$id = '1Zk3UEirsdhFQwqHHu3TW41ElKeLB2mcj'
$dest = 'media/videos/final.mp4'

$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$initUrl = "https://drive.google.com/uc?export=download&id=$id"
$res = Invoke-WebRequest -Uri $initUrl -WebSession $session -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"

if ($res.Content -match 'confirm=([0-9a-zA-Z_-]+)') {
    $token = $matches[1]
    Write-Host "Confirm Token Found: $token"
    $downloadUrl = "https://drive.google.com/uc?export=download&confirm=$token&id=$id"
    Invoke-WebRequest -Uri $downloadUrl -OutFile $dest -WebSession $session -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    Write-Host "Downloaded final.mp4 successfully!"
} else {
    Write-Host "Direct download..."
    Invoke-WebRequest -Uri "https://lh3.googleusercontent.com/d/$id" -OutFile $dest -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}
