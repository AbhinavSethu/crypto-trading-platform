# Crypto Trading Platform

A mock cryptocurrency trading platform built using Next.js, Tailwind CSS, Node.js (Express), and MongoDB. This platform allows users to trade virtual cryptocurrencies, track their portfolio, and view real-time market data. Admins can manage trades, update prices, and oversee transactions.

## Features

### User Features:
- View listed cryptocurrencies with real-time price updates
- Place buy/sell requests for crypto assets
- Track portfolio and transaction history
- Secure authentication with JWT

### Admin Features:
- Approve or reject buy/sell requests
- Manage listed cryptocurrencies
- Update market prices
- View users' transaction history

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js (Express), MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Market Data:** CoinGecko API

## Installation

### Prerequisites:
- Node.js and npm installed
- MongoDB database set up

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crypto-trading-platform.git
   cd crypto-trading-platform
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   COINGECKO_API_URL=https://api.coingecko.com/api/v3/
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## API Endpoints

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/api/coins`        | Fetch all listed cryptocurrencies |
| POST   | `/api/trade/buy`    | Place a buy order               |
| POST   | `/api/trade/sell`   | Place a sell order              |
| GET    | `/api/portfolio`    | Get user portfolio              |
| GET    | `/api/admin/orders` | Get all trade requests (Admin)  |
| POST   | `/api/admin/approve`| Approve a trade request (Admin) |

## Contributing
Feel free to submit pull requests or report issues.

## License
MIT License

