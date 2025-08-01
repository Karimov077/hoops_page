import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-yellow-500 tracking-wider">Tizimga kirish</h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder=""
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-800 font-semibold mb-1">
              Parol
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Kirish
          </button>
        </form>

        {/* Go Back */}
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gray-900 text-yellow-400 py-2 rounded-lg hover:bg-gray-800 transition duration-300 font-semibold"
        >
          Ortga qaytish
        </button>
      </div>
    </div>
  );
};

export default Login;
