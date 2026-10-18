$base = "https://demo.codeandchill.store/kvist/images"
$targetDir = "d:\ai\dastkari 3\public\images"
if (!(Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
}

$files = @(
    "chair.webp",
    "lamp.webp",
    "pendant.webp",
    "stool.webp",
    "table.webp",
    "throw.webp",
    "vase.webp",
    "bowl.webp",
    "cushion.webp",
    "best-chair.jpg",
    "best-lamp.jpg",
    "best-throw.jpg",
    "feature-detail.jpg",
    "interior.jpg",
    "cta.jpg",
    "avatar-1.jpg",
    "avatar-2.jpg",
    "avatar-3.jpg"
)

foreach ($f in $files) {
    $outPath = Join-Path $targetDir $f
    if (!(Test-Path $outPath)) {
        Write-Host "Downloading $f..."
        curl.exe -s -o "$outPath" "$base/$f"
    } else {
        Write-Host "Already exists: $f"
    }
}

$fav = "d:\ai\dastkari 3\public\favicon.png"
if (!(Test-Path $fav)) {
    Write-Host "Downloading favicon..."
    curl.exe -s -o "$fav" "https://demo.codeandchill.store/kvist/favicon.png"
}
Write-Host "Asset download complete!"
