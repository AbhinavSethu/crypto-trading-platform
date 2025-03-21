import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Dummy signup logic (Replace with real authentication logic)
    alert("Signup Successful!");
    router.push("/dashboard"); // Redirect to dashboard after signup
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Create an Account</h2>

        <form onSubmit={handleSignup} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-left text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-400">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full py-2 bg-green-500 rounded-lg hover:bg-green-600">
            Signup
          </button>
        </form>

        {/* Login Button */}
        <p className="mt-4 text-gray-400">Already have an account?</p>
        <Link href="/login" className="mt-2 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Login
        </Link>
      </div>

      <Footer />
    </div>
  );
}
