import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy check (Replace with real authentication logic)
    if (email === "admin@example.com" && password === "admin123") {
      router.push("/admin-dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-400">Admin Login</h1>

      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg mt-6 w-80">
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-2 mb-3 bg-gray-700 rounded border border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-gray-700 rounded border border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
          Login
        </button>
      </form>

      {/* Link to User Login */}
      <p className="mt-4">
        Not an admin?{" "}
        <Link href="/login" className="text-blue-400 hover:underline">
          Go to User Login
        </Link>
      </p>
    </div>
  );
}
