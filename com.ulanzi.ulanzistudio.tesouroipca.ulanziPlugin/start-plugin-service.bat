@echo off
setlocal
echo Buscando taxas via API de Dados Abertos (Tesouro Transparente)...
set "PLUGIN_DIR=%~dp0"

:: Escape the & in the URL for Batch
set "RESOURCE_ID=7969289c-1c39-4f7f-8561-827d00f8d689"
set "API_URL=https://www.tesourotransparente.gov.br/ckan/api/3/action/datastore_search?resource_id=%RESOURCE_ID%&q=2032"

:: Use PowerShell to fetch (quoted URL to avoid batch issues)
powershell -Command "$resp = Invoke-RestMethod -Uri '%API_URL%'; $item = $resp.result.records | Where-Object { $_.'Tipo Titulo' -like '*IPCA*' -and $_.'Data Vencimento' -like '*2032*' } | Sort-Object -Property 'Data Referencia' -Descending | Select-Object -First 1; $out = @{ rate = [double]$item.'Taxa Compra Manha'; status = 'Aberto' }; $out | ConvertTo-Json | Out-File -FilePath '%PLUGIN_DIR%plugin\data.json' -Encoding utf8"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERRO: Falha ao acessar a API.
) else (
    echo.
    echo Dados atualizados com sucesso!
)

start "" "%PLUGIN_DIR%plugin\app.html"
echo.
echo Mantenha a aba aberta.
pause
