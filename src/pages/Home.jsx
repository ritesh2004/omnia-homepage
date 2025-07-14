import React from "react";
import { Navbar } from "../components/Navbar";
import TextReveal from "../components/TextReveal";
import { BackgroundBeams } from "../components/ui/background_beams";
import RobotAnimation from "../assets/Robot Automation Gif.json";
import Lottie from "lottie-react";

const phrases = [
  'Welcome to',
  'Omnia Automation',
  '&',
  'Beyond',
  'Hi, There!',
];

const Home = () => {
  return (
     <div className="bg-[#080a1a] text-white min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <main className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-24">
        {/* Background grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-cover opacity-10 z-0" />

        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center">
          <Lottie animationData={RobotAnimation} loop={true} className="w-64 h-64 mb-8" />
          <TextReveal phrases={phrases} />
        </div>
      </main>
      <BackgroundBeams/>
    </div>

  );
};

export default Home;