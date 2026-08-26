# Download Media Script for Google Drive files
$files = [ordered]@{
    'audio/my_universe.mp3'   = '18RBBuJI3SKwMHMI9WOVn3uKgFrIZeGSh'
    'audio/mai.mp3'           = '1MtUvL_Vv7MmlxkGuIyfEWUvJBqx_syJ0'
    'audio/bendita_tu_luz.mp3'= '1L-f3Iz2gXRdS7UWQm4vKgYp1eA99qaOU'
    'audio/sone.mp3'          = '1sxkPGb6andJg6EiRNRXhzWZmUrWh9Mg3'
    'videos/dani.mp4'         = '1D1kGcHRu2_7YwlKvrMa-GtVzMbJNcLTO'
    'videos/jacqui.mp4'       = '1isNk7Ls-WJx3Q0z1Zmhr9A40A-ZuO3r1'
    'videos/josue.mp4'        = '17uTMv51_V9nBcR_eagSRra-UwxGLuymt'
    'videos/kelly.mp4'        = '1ik5e240qFXZZQ8GVM1GuznsAHGJMJR2B'
    'videos/final.mp4'        = '1Zk3UEirsdhFQwqHHu3TW41ElKeLB2mcj'
}

New-Item -ItemType Directory -Force -Path 'media/audio', 'media/videos' | Out-Null

foreach ($relPath in $files.Keys) {
    $id = $files[$relPath]
    $dest = "media/$relPath"
    Write-Host "Downloading $dest ..."
    $url = "https://drive.google.com/uc?export=download&id=$id"
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        Write-Host "SUCCESS: $dest"
    } catch {
        Write-Host "ERROR downloading $dest : $_"
    }
}
