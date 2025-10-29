import React from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  const navLinks = ["About", "Faculty", "News", "Results" , "Questions"];

  return (
    <footer className="bg-[#1e293b] text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:grid md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Logo & About */}
        <div className="flex flex-col gap-4 items-center md:items-start bg-[#273449] rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761482513/rh%20acamdey.jpg"
              alt="R H Academy Logo"
              className="w-14 h-14 rounded-full border-2 border-white object-cover shadow-lg"
            />
            <h2 className="text-xl font-bold tracking-wide">R H ACADEMY</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering students with knowledge, integrity, and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 items-center md:items-start bg-[#273449] rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="hover:text-teal-400 transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 items-center md:items-start bg-[#273449] rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-gray-300">📍 Academy Address - Barasat,North 24pgs,kolkata-700125</p>
          <p className="text-gray-300">📍 Office Address - 15/2 Jessore Road,Barasat,North 24 pgs, kolkata-700125</p>
          <p className="text-gray-300">📞 +91 9073758397 , +91 8620925441</p>
          <p className="text-gray-300">✉️ rhacademy125@gmail.com</p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3 items-center md:items-start bg-[#273449] rounded-xl p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition transform hover:scale-110"
            >
              <RiTwitterXLine size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-800 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
            >
              <AiOutlineFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-pink-500 rounded-full hover:bg-pink-400 transition transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-400 rounded-full hover:bg-blue-300 transition transform hover:scale-110"
            >
              <CiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1b2737] text-center py-4 mt-6 text-gray-400 text-sm border-t border-gray-700 flex flex-col gap-1">
        <span>© {new Date().getFullYear()} R H ACADEMY. All rights reserved.</span>
        <span>
          developed and maintained by —{" "}
          <span className="text-gray-300 font-medium">developerfahim134@gmail.com</span>
        </span>
      </div>
    </footer>
  );
}




