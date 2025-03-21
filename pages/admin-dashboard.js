import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function AdminDashboard() {
  const router = useRouter();

  // Dummy Data (Replace with DB data)
  const [requests, setRequests] = useState([
    { id: 1, user: "User1", type: "BUY", coin: "BTC", amount: 1, status: "PENDING" },
    { id: 2, user: "User2", type: "SELL", coin: "ETH", amount: 2, status: "PENDING" },
  ]);

  const [coins, setCoins] = useState(["BTC", "ETH", "SOL", "XRP", "ADA"]);
  const [newCoin, setNewCoin] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [userHistory, setUserHistory] = useState({
    User1: [{ type: "BUY", coin: "BTC", amount: 1, status: "COMPLETED" }],
    User2: [{ type: "SELL", coin: "ETH", amount: 2, status: "PENDING" }],
  });

  // Approve a transaction
  const approveRequest = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "COMPLETED" } : req));
  };

  // Add a new coin
  const addCoin = () => {
    if (newCoin && !coins.includes(newCoin.toUpperCase())) {
      setCoins([...coins, newCoin.toUpperCase()]);
      setNewCoin("");
    }
  };

  // Remove a coin
  const removeCoin = (coin) => {
    setCoins(coins.filter(c => c !== coin));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 flex">
      {/* Left Section (Manage Coins & Approve Requests) */}
      <div className="w-1/3 space-y-6">
        {/* Manage Coins */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-400">Manage Coins</h3>
          <div className="mt-2 flex">
            <input
              type="text"
              className="p-2 rounded bg-gray-700 border border-gray-600 w-full"
              placeholder="Enter new coin (e.g., DOT)"
              value={newCoin}
              onChange={(e) => setNewCoin(e.target.value)}
            />
            <button
              onClick={addCoin}
              className="ml-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="mt-4">
            {coins.map((coin) => (
              <div key={coin} className="flex justify-between bg-gray-700 p-2 rounded-lg mt-2">
                <p>{coin}</p>
                <button
                  onClick={() => removeCoin(coin)}
                  className="px-4 py-1 bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Approve Requests */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-400">Approve Requests</h3>
          {requests.length === 0 ? (
            <p>No pending requests.</p>
          ) : (
            requests.map((req) => (
              <div key={req.id} className="bg-gray-700 p-3 rounded-lg mt-2 flex justify-between">
                <p>
                  <strong>{req.user}</strong> wants to {req.type} {req.amount} {req.coin} -{" "}
                  <span className={req.status === "COMPLETED" ? "text-green-400" : "text-yellow-400"}>
                    {req.status}
                  </span>
                </p>
                {req.status === "PENDING" && (
                  <button
                    onClick={() => approveRequest(req.id)}
                    className="px-4 py-1 bg-green-500 rounded-lg hover:bg-green-600"
                  >
                    Approve
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Section (User History) */}
      <div className="w-2/3 bg-gray-800 p-6 rounded-lg ml-6">
        <h3 className="text-2xl font-semibold text-green-400">User Buy/Sell History</h3>
        
        {/* Search User */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search user history..."
            className="p-2 w-full bg-gray-700 border border-gray-600 rounded"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </div>

        {/* Display User History */}
        <div className="mt-4">
          {searchUser && userHistory[searchUser] ? (
            userHistory[searchUser].map((entry, index) => (
              <p key={index} className="bg-gray-700 p-2 rounded-lg mt-2">
                {entry.type} {entry.amount} {entry.coin} -{" "}
                <span className={entry.status === "COMPLETED" ? "text-green-400" : "text-yellow-400"}>
                  {entry.status}
                </span>
              </p>
            ))
          ) : (
            searchUser && <p className="text-red-400 mt-2">No history found for this user.</p>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={() => router.push("/admin-login")}
        className="absolute top-6 right-6 px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

      <Footer />
    </div>
  );
}
