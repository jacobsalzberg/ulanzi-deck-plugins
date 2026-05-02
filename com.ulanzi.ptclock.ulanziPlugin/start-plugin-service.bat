@echo off
REM San Francisco PT Clock Plugin Service
REM This batch file starts the bridge service required for the plugin

echo Starting San Francisco PT Clock Service...

REM Get the directory where this batch file is located
set PLUGIN_DIR=%~dp0

REM Start the plugin service in the default browser
start "" "%PLUGIN_DIR%plugin\app.html"

echo Plugin service started successfully!
echo KEEP THE BROWSER TAB OPEN for the clock to update on your deck.

REM Keep the window open for 5 seconds to show the message
timeout /t 5 /nobreak >nul

exit
