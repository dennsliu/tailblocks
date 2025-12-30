# Downloads Space Mono font files referenced by Google Fonts and creates a local CSS
# Run from project root: .\scripts\download-fonts.ps1

$cssUrl = 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap'
$destDir = Join-Path $PSScriptRoot '..\public\fonts\SpaceMono'
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

Write-Output "Fetching CSS from $cssUrl"
$css = (Invoke-WebRequest $cssUrl -UseBasicParsing).Content

$matches = [regex]::Matches($css, "url\((https:[^)]+)\)")
$localCss = $css

foreach ($m in $matches) {
    $url = $m.Groups[1].Value.Trim("'\"")
    $fileName = Split-Path $url -Leaf
    $out = Join-Path $destDir $fileName
    Write-Output "Downloading $url -> $out"
    Invoke-WebRequest $url -OutFile $out -UseBasicParsing
    $localCss = $localCss -replace [regex]::Escape($url), "/fonts/SpaceMono/$fileName"
}

$cssOut = Join-Path $destDir 'space-mono.css'
Write-Output "Writing local CSS to $cssOut"
Set-Content -Path $cssOut -Value $localCss -Encoding UTF8
Write-Output "Done. Open public/fonts/SpaceMono to see downloaded files."
