import React from 'react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
  return (
    <header className="bg-black shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand Name */}
        <div className="text-yellow-400 text-2xl font-bold tracking-widest">
          Karimov
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-white text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${isActive ? "text-yellow-400 underline" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${isActive ? "text-yellow-400 underline" : ""}`
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/todos"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition ${isActive ? "text-yellow-400 underline" : ""}`
            }
          >
            Todos
          </NavLink>
        </div>

        {/* Login Button */}
        <NavLink
          to="/sign-In"
          className="bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Headers;
