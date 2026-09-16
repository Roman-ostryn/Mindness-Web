$ErrorActionPreference = "Stop"

Set-Location (Split-Path $PSScriptRoot -Parent)

$env:PORT = "3000"
$env:BASE_PATH = "/"

Write-Host "Starting Mindness website at http://localhost:$($env:PORT)" -ForegroundColor Green
pnpm --filter @workspace/mindness-website run dev
