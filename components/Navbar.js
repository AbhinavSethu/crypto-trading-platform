import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">CryptoTrade</h1>

        {/* Navigation Links */}
        <div>
          <Link href="/login" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
            Login
          </Link>
          <Link href="/signup" className="ml-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
