import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {
  const holdings = [
    { coin: "Bitcoin", amount: "0.05 BTC", value: "$3,000" },
    { coin: "Ethereum", amount: "2.0 ETH", value: "$6,000" },
    { coin: "Solana", amount: "15 SOL", value: "$2,500" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto flex-grow p-6">
        <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>

        {/* Portfolio Value */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-2">Total Portfolio Value</h3>
          <p className="text-2xl font-bold text-green-400">$11,500</p>
        </div>

        {/* Holdings */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">My Holdings</h3>
          <ul>
            {holdings.map((holding, index) => (
              <li key={index} className="border-b border-gray-700 py-3 flex justify-between">
                <span className="font-semibold">{holding.coin}</span>
                <span>{holding.amount}</span>
                <span className="text-blue-400">{holding.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
