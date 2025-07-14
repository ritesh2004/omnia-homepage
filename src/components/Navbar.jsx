import React, { useState } from 'react';
import logo from '../assets/logo.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="flex justify-between items-center px-10 py-5 bg-[#0b0e24] shadow-md z-10 relative">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Omnia Logo" className="h-18" />
                </div>
                <nav className={`md:flex gap-8 text-white font-medium ${isOpen ? 'flex' : 'hidden'} md:block`}>
                    <a href="#home" className="hover:text-cyan-400 transition duration-300" aria-label="Home">Home</a>
                    <a href="#about" className="hover:text-cyan-400 transition duration-300" aria-label="About">About</a>
                    <a href="#services" className="hover:text-cyan-400 transition duration-300" aria-label="Services">Services</a>
                    <a href="#contact" className="hover:text-cyan-400 transition duration-300" aria-label="Contact">Contact</a>
                </nav>
                <div className="flex items-center gap-6">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md font-semibold transition duration-300">
                        Schedule a meeting
                    </button>
                    <div className="text-xs text-right">
                        <p><span role="img" aria-label="India">🇮🇳</span> +91 95997 00531</p>
                        <p><span role="img" aria-label="USA">🇺🇸</span> +1 6105 979 360</p>
                    </div>
                </div>
                <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? '✖️' : '☰'}
                </button>
            </header>
        </div>
    );
};
