import React from 'react';
import { FaCogs, FaChartLine } from 'react-icons/fa';
import { ThreeDCard } from '../components/ThreeDCard';
import AISoftwareAnimation from '../assets/AI data.json';
import AIChatbotAnimation from '../assets/Chatbot.json';
import TextReveal from '../components/TextReveal';
import { BackgroundBeams } from '../components/ui/background_beams';

const services = [
  {
    title: 'AI Software',
    imageUrl: AISoftwareAnimation,
    description:
      'Smart tools that help track data, generate predictive results, and automate tasks.',
  },
  {
    title: 'AI Chatbot',
    imageUrl: AIChatbotAnimation,
    description:
      'Bots are available 24/7 that talk naturally and manage support instantly.',
  },
];

const phrases = [
  'Automating Workflows Intelligently',
  'Enhancing User Experience',
  'Transforming business with AI'
];

export default function Services() {
  return (
    <section className="bg-[#080a1a] text-white px-4 py-20 min-h-screen relative">
      <BackgroundBeams />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-300 mb-4">Our Services</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-12 rounded-full"></div>

        <TextReveal phrases={phrases} size='text-lg md:text-xl' color='text-teal-300'/>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-10 relative z-20">
          {services.map((service, index) => (
            <ThreeDCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
