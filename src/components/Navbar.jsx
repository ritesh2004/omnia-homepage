import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Schedule from '../pages/Schedule';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openSchedule = () => {
    setShowSchedule(true);
  };

  const closeSchedule = () => {
    setShowSchedule(false);
  };

  return (
    <div>
      <header className="flex justify-between items-center px-10 py-5 bg-[#0b0e24] shadow-md z-10 relative">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Omnia Logo" className="h-18" />
        </div>

        <nav className={`md:flex gap-8 text-white font-medium ${isOpen ? 'flex' : 'hidden'} md:block`}>
          <a href="#home" className="hover:text-cyan-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition duration-300">About</a>
          <a href="#services" className="hover:text-cyan-400 transition duration-300">Services</a>
          <a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={openSchedule}
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md font-semibold transition duration-300"
          >
            Schedule a meeting
          </button>
          <div className="text-xs text-right white">
            <p>🇮🇳 +91 95997 00531</p>
            <p>🇺🇸 +1 6105 979 360</p>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✖️' : '☰'}
        </button>
      </header>

      {showSchedule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg relative max-w-lg w-full">
            <button
              onClick={closeSchedule}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✖
            </button>
            <Schedule />
          </div>
        </div>
      )}
    </div>
  );
};
