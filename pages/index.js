import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Crypto Trading Platform</title>
        <meta name="description" content="Mock Crypto Trading Platform" />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">CryptoTrade</h1>
        <div>
          <Link href="/login" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
            Login
          </Link>
          <Link href="/signup" className="ml-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
            Signup
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Trade Cryptos, Learn & Grow</h2>
        <p className="text-gray-400 mb-6">Experience virtual crypto trading with real-time market data.</p>
        <Link href="/login" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
          Start Trading
        </Link>
      </header>

      {/* Trending Coins (Static for Now) */}
      <section className="px-6 py-10 bg-gray-800">
        <h3 className="text-2xl font-bold mb-4">Trending Coins</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {["Bitcoin", "Ethereum", "Solana", "Cardano"].map((coin, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg text-center">
              <h4 className="text-lg font-semibold">{coin}</h4>
              <p className="text-gray-400">$XX,XXX</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800">
        <p className="text-gray-500">© 2025 CryptoTrade. All rights reserved.</p>
      </footer>
    </div>
  );
}
