import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Link from "next/link";

// Dummy user inventory (Replace with database values later)
const userInventory = {
  BTC: 2,
  Ethereum: 5,
  SOL: 10,
  DOGE: 5000,
  ADA: 200,
};

// Generate random price history for last 10 days
const generateDummyData = () => {
  const today = new Date();
  let data = [];
  for (let i = 9; i >= 0; i--) {
    let date = new Date();
    date.setDate(today.getDate() - i);
    data.push({
      date: date.toISOString().split("T")[0],
      price: (Math.random() * (50000 - 20000) + 20000).toFixed(2),
    });
  }
  return data;
};

export default function Trade() {
  const router = useRouter();
  const { coin, type } = router.query;
  const [quantity, setQuantity] = useState("");
  const [priceData, setPriceData] = useState([]);
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    setPriceData(generateDummyData());
    setUserBalance(userInventory[coin] || 0);
  }, [coin]);

  const handleTradeRequest = () => {
    if (!quantity || quantity <= 0) {
      alert("Enter a valid quantity!");
      return;
    }

    if (type === "sell" && quantity > userBalance) {
      alert(`Not enough ${coin} in inventory! Available: ${userBalance}`);
      return;
    }

    alert(`Trade request placed: ${type.toUpperCase()} ${quantity} ${coin}`);
    router.push("/market");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400">
        {type?.toUpperCase()} {coin}
      </h1>

      {/* Price Chart */}
      <div className="bg-gray-800 p-4 rounded-lg mt-6">
        <h2 className="text-xl font-semibold text-yellow-400 text-center">📊 Price History (Last 10 Days)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceData}>
            <XAxis dataKey="date" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#00C49F" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Buy/Sell Form */}
      <div className="bg-gray-800 p-6 rounded-lg mt-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-yellow-400">{type?.toUpperCase()} {coin}</h2>
        
        {type === "sell" && (
          <p className="text-sm text-gray-300 mb-2">Your Balance: {userBalance} {coin}</p>
        )}

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
          placeholder="Enter quantity"
        />
        <button
          onClick={handleTradeRequest}
          className={`w-full mt-4 p-2 rounded-md text-white ${
            type === "buy" ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {type?.toUpperCase()} Now
        </button>
      </div>

      {/* Back to Market */}
      <div className="text-center mt-6">
        <Link href="/market">
          <button className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-white">
            Back to Market
          </button>
        </Link>
      </div>
    </div>
  );
}
