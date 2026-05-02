# Ulanzi Deck Plugins Collection

A collection of custom plugins for the **Ulanzi Desktop Deck**, designed to improve productivity and provide real-time financial monitoring directly on your hardware.

## 🚀 Plugins Included

### 1. Tesouro IPCA+ 2032 Monitor
A real-time (and official reference) monitor for the Brazilian government bond **Tesouro IPCA+ 2032**.
- **Features**: Fetches official rates from Tesouro Nacional (via Cloudflare Workers).
- **Fallback Logic**: Intelligent multi-tiered fetching (Real-time -> Official CSV -> Backup Mirror).
- **Visuals**: Displays the rate, data source (REAL/OFFI), and last update timestamp.

### 2. San Francisco Clock (PT)
A simple but elegant clock for Pacific Time (San Francisco).
- **Features**: Accurate timezone management using the Intl API.
- **Bug Fix**: Includes a specific fix for the 24:00 midnight display bug.

### 3. USD/BRL Exchange Rate
Real-time monitoring of the US Dollar to Brazilian Real exchange rate.
- **Features**: Live currency updates and visual indicators.

---

## 🛠️ Technical Architecture

This collection utilizes a modern **Serverless Bridge** architecture:
- **Frontend**: Standard JavaScript/HTML running within the Ulanzi Deck CEF environment.
- **Backend**: **Cloudflare Workers** acting as a proxy to bypass CORS restrictions and provide data normalization from financial sources.
- **Resilience**: Custom chronological sorting logic for CSV data to ensure the most recent business day is always displayed, even during weekends or holidays.

---

## 📦 Installation

1. Clone this repository.
2. Copy the desired `.ulanziPlugin` folder to your Ulanzi Plugins directory:
   `%APPDATA%\Ulanzi\UlanziDeck\Plugins\`
3. Run the `start-plugin-service.bat` (if applicable) or the `install.bat` within each folder.
4. Restart **Ulanzi Studio**.
5. Drag and drop the plugin to your deck.

---

## 📄 License
MIT

---

*Developed by Jacob Salzberg.*
