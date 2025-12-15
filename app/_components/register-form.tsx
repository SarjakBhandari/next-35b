import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="max-w-md mx-auto border shadow-md p-6 rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-600">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-600">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-600">Location</label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Enter your location"
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

      <div className="mb-4">
        <label className="block mb-2 font-semibold text-gray-600">Confirm Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Confirm your password"
        />
      </div>

      <button className="w-full bg-green-500 hover:bg-green-600 border rounded p-2 mt-2 text-white font-semibold transition duration-200">
        Register
      </button>

      <div className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:text-blue-700 underline">
          Login
        </Link>
      </div>
    </div>
  );
}