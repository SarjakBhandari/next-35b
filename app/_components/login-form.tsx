import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="max-w-md mx-auto border shadow-md p-6 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
      
      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-600">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-600">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your password"
        />
      </div>

      <button className="w-full bg-green-500 hover:bg-green-600 border rounded p-2 mt-2 text-white font-semibold transition duration-200">
        Login
      </button>

      <div className="mt-4 text-center text-gray-600">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:text-blue-700 underline">
          Register
        </Link>
      </div>
    </div>
  );
}