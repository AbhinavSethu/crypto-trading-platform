import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function Account() {
  const router = useRouter();

  // Dummy user details (Replace with real user authentication data)
  const user = {
    username: "CryptoTrader99",
    email: "crypto99@example.com",
  };

  // Dummy portfolio data (Replace with real user data from DB)
  const [portfolio] = useState({
    BTC: 2,
    ETH: 5,
    SOL: 10,
    XRP: 100,
    ADA: 50,
  });

  // Dummy buy/sell requests (Replace with DB records)
  const [requests] = useState([
    { id: 1, type: "BUY", coin: "BTC", amount: 1, status: "PENDING" },
    { id: 2, type: "SELL", coin: "ETH", amount: 2, status: "PENDING" },
    { id: 3, type: "BUY", coin: "SOL", amount: 5, status: "COMPLETED" },
  ]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-blue-400">User Account</h2>

        {/* User Info */}
        <div className="bg-gray-800 p-4 rounded-lg mt-4">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        {/* User Portfolio */}
        <h3 className="text-2xl font-semibold mt-6">Your Portfolio</h3>
        <div className="bg-gray-800 p-4 rounded-lg mt-2">
          {Object.entries(portfolio).map(([coin, amount]) => (
            <p key={coin}>
              <strong>{coin}:</strong> {amount} coins
            </p>
          ))}
        </div>

        {/* Buy/Sell Requests */}
        <h3 className="text-2xl font-semibold mt-6">Your Requests</h3>
        <div className="bg-gray-800 p-4 rounded-lg mt-2">
          {requests.length === 0 ? (
            <p>No buy/sell requests found.</p>
          ) : (
            requests.map((req) => (
              <div key={req.id} className="bg-gray-700 p-3 rounded-lg mt-2">
                <p>
                  <strong>{req.type} {req.amount} {req.coin}</strong> - Status:{" "}
                  <span className={req.status === "COMPLETED" ? "text-green-400" : "text-yellow-400"}>
                    {req.status}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>

        {/* Back to Dashboard Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Back to Dashboard
        </button>
      </div>

      <Footer />
    </div>
  );
}
