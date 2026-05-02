# 🕒 San Francisco PT Clock for Ulanzi Deck

A real-time clock displaying San Francisco (Pacific Time) on your Ulanzi Deck.

## 🚀 Quick Start

### 1. Installation
1.  Go to `e:\ssdrepos\ulanzi\com.ulanzi.ptclock.ulanziPlugin`.
2.  Double-click `install.bat`. This will copy the plugin to your Ulanzi Deck plugins folder.

### 2. Start the Service
1.  Navigate to `%APPDATA%\Ulanzi\UlanziDeck\Plugins\com.ulanzi.ptclock.ulanziPlugin`.
2.  Double-click `start-plugin-service.bat`.
3.  **Keep the browser tab open**. This is required for the clock to update.

### 3. Add to your Deck
1.  Open **Ulanzi Studio**.
2.  Find **San Francisco Clock (PT)** in the plugin list (under "Time" category).
3.  Drag it to a button on your deck.

## ✨ Features
- **Accurate PT Time**: Automatically handles Daylight Saving Time (DST) for San Francisco.
- **Clean Display**: Large HH:MM display with a green seconds counter.
- **Instant Sync**: Updates every second.

## 🛠️ Customization
To change the colors or layout, edit `plugin/actions/ClockDisplay.js` in the installation folder.
