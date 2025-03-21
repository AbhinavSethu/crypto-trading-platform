import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Market() {
  const router = useRouter();

  // Real-world coins with approximate prices (Replace with API data later)
  const coins = [
    { name: "Bitcoin", symbol: "BTC", price: 65000 },
    { name: "Ethereum", symbol: "ETH", price: 3500 },
    { name: "Solana", symbol: "SOL", price: 140 },
    { name: "XRP", symbol: "XRP", price: 0.7 },
    { name: "Cardano", symbol: "ADA", price: 0.5 },
    { name: "Dogecoin", symbol: "DOGE", price: 0.08 },
    { name: "Polkadot", symbol: "DOT", price: 6.2 },
    { name: "Shiba Inu", symbol: "SHIB", price: 0.00003 },
    { name: "Avalanche", symbol: "AVAX", price: 40 },
    { name: "Chainlink", symbol: "LINK", price: 18 },
    { name: "Polygon", symbol: "MATIC", price: 1.2 },
    { name: "Litecoin", symbol: "LTC", price: 150 },
    { name: "Cosmos", symbol: "ATOM", price: 10 },
    { name: "Stellar", symbol: "XLM", price: 0.12 },
    { name: "VeChain", symbol: "VET", price: 0.05 },
    { name: "Uniswap", symbol: "UNI", price: 9 },
    { name: "Theta", symbol: "THETA", price: 3.5 },
    { name: "Tezos", symbol: "XTZ", price: 2 },
    { name: "Aave", symbol: "AAVE", price: 85 },
    { name: "Monero", symbol: "XMR", price: 160 },
    { name: "Bitcoin Cash", symbol: "BCH", price: 220 },
    { name: "Dash", symbol: "DASH", price: 55 },
    { name: "Neo", symbol: "NEO", price: 10 },
    { name: "Zcash", symbol: "ZEC", price: 45 },
    { name: "EOS", symbol: "EOS", price: 1.2 },
    { name: "IOTA", symbol: "MIOTA", price: 0.25 },
    { name: "Maker", symbol: "MKR", price: 1300 },
    { name: "Compound", symbol: "COMP", price: 150 },
    { name: "Synthetix", symbol: "SNX", price: 3 },
    { name: "Yearn Finance", symbol: "YFI", price: 24000 },
    { name: "FTX Token", symbol: "FTT", price: 5 },
    { name: "OKB", symbol: "OKB", price: 40 },
    { name: "Huobi Token", symbol: "HT", price: 7 },
    { name: "BitTorrent", symbol: "BTT", price: 0.000001 },
    { name: "PancakeSwap", symbol: "CAKE", price: 3.5 },
    { name: "The Graph", symbol: "GRT", price: 0.5 },
    { name: "Decentraland", symbol: "MANA", price: 0.8 },
    { name: "Enjin Coin", symbol: "ENJ", price: 1 },
    { name: "Chiliz", symbol: "CHZ", price: 0.3 },
    { name: "Hedera", symbol: "HBAR", price: 0.4 },
    { name: "Quant", symbol: "QNT", price: 120 },
    { name: "Algorand", symbol: "ALGO", price: 0.9 },
    { name: "Celo", symbol: "CELO", price: 0.7 },
    { name: "Stacks", symbol: "STX", price: 1.5 },
    { name: "Helium", symbol: "HNT", price: 5 },
    { name: "Filecoin", symbol: "FIL", price: 8 },
    { name: "Flow", symbol: "FLOW", price: 1.2 },
    { name: "Curve DAO", symbol: "CRV", price: 1.5 },
    { name: "Axie Infinity", symbol: "AXS", price: 6 },
    { name: "Sandbox", symbol: "SAND", price: 0.7 },
  ];

  // Function to handle Buy/Sell
  const handleTrade = (coin, type) => {
    router.push({
      pathname: "/trade",
      query: { coin: coin.name, type },
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400">📈 Crypto Market</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {coins.map((coin, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">{coin.name} ({coin.symbol})</h2>
            <p className="text-green-400 text-lg">${coin.price.toLocaleString()}</p>

            <div className="flex justify-center mt-4 space-x-2">
              <button
                onClick={() => handleTrade(coin, "buy")}
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Buy
              </button>
              <button
                onClick={() => handleTrade(coin, "sell")}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
              >
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Dashboard */}
      <div className="text-center mt-6">
        <Link href="/dashboard">
          <button className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-white">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
