import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

export default function Login() {
  const router = useRouter();

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy user credentials (Replace with actual authentication)
  const userCredentials = {
    email: "user@example.com",
    password: "user123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy check (Replace with real authentication logic)
    if (email === userCredentials.email && password === userCredentials.password) {
      router.push("/dashboard"); // Redirect after login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center relative">
      {/* Admin Login Button - Top Right */}
      <button
        onClick={() => router.push("/admin-login")}
        className="absolute top-6 right-6 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
      >
        Admin Login
      </button>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-blue-400 text-center">User Login</h2>

        {error && <p className="text-red-400 text-center mt-2">{error}</p>}

        <form onSubmit={handleLogin} className="mt-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mt-3 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-400 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>

      <Footer />
    </div>
  );
}