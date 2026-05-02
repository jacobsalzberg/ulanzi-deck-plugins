@echo off
echo Installing Tesouro IPCA+ Monitor Plugin...
set "INSTALL_PATH=%APPDATA%\Ulanzi\UlanziDeck\Plugins\com.ulanzi.ulanzistudio.tesouroipca.ulanziPlugin"
set "OLD_PATH=%APPDATA%\Ulanzi\UlanziDeck\Plugins\com.ulanzi.ulanzistudio.tesouroipca"

:: Remove old incorrect path if it exists
if exist "%OLD_PATH%" rd /s /q "%OLD_PATH%"

if not exist "%INSTALL_PATH%" mkdir "%INSTALL_PATH%"

xcopy /E /Y /I ".\*" "%INSTALL_PATH%\"

echo.
echo Installation complete!
echo.
echo 1. Run 'start-plugin-service.bat' from the plugin folder.
echo 2. Open Ulanzi Studio and add 'Tesouro IPCA+' to your deck.
echo.
pause
