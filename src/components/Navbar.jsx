import React from 'react'
import logo from '../assets/logo.png'

export const Navbar = () => {
    return (
        <div>
            <header className="flex justify-between items-center px-10 py-5 bg-[#0b0e24] shadow-md z-10 relative">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Omnia Logo" className="h-18" />
                </div>
                <nav className="hidden md:flex gap-8 text-white font-medium">
                    <a href="#home" className="hover:text-cyan-400">Home</a>
                    <a href="#about" className="hover:text-cyan-400">About</a>
                    <a href="#services" className="hover:text-cyan-400">Services</a>
                    <a href="#contact" className="hover:text-cyan-400">Contact</a>
                </nav>
                <div className="flex items-center gap-6">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md font-semibold">
                        Schedule a meeting
                    </button>
                    <div className="text-xs text-right">
                        <p><span role="img" aria-label="India">🇮🇳</span> +91 95997 00531</p>
                        <p><span role="img" aria-label="USA">🇺🇸</span> +1 6105 979 360</p>
                    </div>
                </div>
            </header>
        </div>
    )
}
