@echo off
set PLUGIN_NAME=com.ulanzi.ptclock.ulanziPlugin
set TARGET_DIR=%APPDATA%\Ulanzi\UlanziDeck\Plugins\%PLUGIN_NAME%

echo Installing San Francisco PT Clock Plugin...
echo Source: %~dp0
echo Target: %TARGET_DIR%

if not exist "%APPDATA%\Ulanzi\UlanziDeck\Plugins" (
    echo Error: Ulanzi Deck Plugins directory not found!
    echo Please make sure Ulanzi Studio is installed.
    pause
    exit /b 1
)

xcopy "%~dp0*" "%TARGET_DIR%\" /E /I /Y /Q

echo.
echo Installation complete!
echo.
echo 1. Run 'start-plugin-service.bat' from the plugin folder.
echo 2. Open Ulanzi Studio and add the 'San Francisco Clock' to your deck.
echo.
pause
