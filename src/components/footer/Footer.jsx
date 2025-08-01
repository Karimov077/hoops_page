import React from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-16 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/dilshodovicc_u"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-yellow-400 text-sm font-bold rounded-lg hover:bg-yellow-500 transition-transform duration-300 shadow-md"
        >
          Instagram
        </a>

        {/* Telegram Icon */}
        <a
          href="https://t.me/karimv_u"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-yellow-400 transition"
        >
          <FaTelegramPlane />
        </a>

        {/* Text */}
        <p className="text-gray-400 text-sm mt-4">BY dprcial Karimov</p>
      </div>
    </footer>
  );
};

export default Footer;
