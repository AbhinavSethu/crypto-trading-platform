import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

// Dummy user session (Replace with real authentication later)
const getUserSession = () => ({
  username: "JohnDoe",
  email: "johndoe@example.com",
});

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch user session (Replace with actual auth logic)
    const session = getUserSession();
    if (!session) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setUser(session);
    }

    // Set trending coins (Only on client side to prevent hydration issues)
    setTrendingCoins([
      { name: "Bitcoin", price: Math.floor(Math.random() * 50000) + 20000 },
      { name: "Ethereum", price: Math.floor(Math.random() * 3000) + 1000 },
      { name: "Solana", price: Math.floor(Math.random() * 200) + 50 },
      { name: "Cardano", price: Math.floor(Math.random() * 10) + 1 },
      { name: "Dogecoin", price: Math.floor(Math.random() * 1) + 0.1 },
    ]);
  }, []);

  const handleLogout = () => {
    // Clear user session (Replace with real logout logic)
    alert("Logged out successfully!");
    router.push("/"); // Redirect to home page (index.js)
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Navbar with Logout Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-400">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
        >
          Logout
        </button>
      </div>

      {/* User Details Box */}
      {user && (
        <div className="bg-gray-800 p-4 rounded-lg mt-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">👤 User Details</h2>
            <p className="text-gray-300">Username: {user.username}</p>
            <p className="text-gray-300">Email: {user.email}</p>
          </div>
          <Link href="/account">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white">
              View Account
            </button>
          </Link>
        </div>
      )}

      {/* Trending Coins (Rendered after hydration to prevent mismatch) */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-yellow-400">🔥 Trending Coins</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {trendingCoins.map((coin, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-white">{coin.name}</h3>
              <p className="text-gray-400">$ {coin.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* View Full Market Button */}
      <div className="text-center mt-6">
        <Link href="/market">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white">
            View Full Market
          </button>
        </Link>
      </div>
    </div>
  );
}
