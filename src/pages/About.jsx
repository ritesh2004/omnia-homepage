import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { BackgroundBeams } from "../components/ui/background_beams";
import TextReveal from "../components/TextReveal";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabData = {
    mission: {
      title: "Our Mission",
      content: [
        {
          type: "paragraph",
          text: "To bring the power of OmniaGPT to every business. Our OmniaGPT boasts a powerful AI Explain feature that makes it easy for you to understand and respond to customer inquiries. It effortlessly translates complex messages in real-time, breaking them down into simple explanations. Additionally, we use customer data to fine-tune the OmniaGPT model."
        },
        {
          type: "ai-analysis",
          title: "AI Analysis",
          content: "Omnia's vision aligns with 92% of users' expectations for simple, transparent, and efficient automation solutions.",
          footnote: "AI-generated analysis based on company data and industry benchmarks"
        },
      ]
    },
    team: {
      title: "The Team",
      content: [
        {
          type: "paragraph",
          text: "A diverse collective of AI researchers, linguists, and UX specialists pushing the boundaries of conversational AI since 2018."
        },
        {
          type: "ai-analysis",
          title: "AI Assessment",
          content: "Team expertise covers 97% of required AI competency domains.",
          footnote: "AI-generated analysis based on company data and industry benchmarks"
        },
        {
          type: "team-members",
          members: [
            {
              title: "AI Researchers",
              description: "Experts in neural networks and machine learning algorithms",
              icon: "🧠"
            },
            {
              title: "Linguists",
              description: "Language specialists ensuring natural, human-like conversations",
              icon: "🗣️"
            },
            {
              title: "UX Specialists",
              description: "Designing intuitive interfaces for seamless user experiences",
              icon: "🎨"
            }
          ]
        }
      ]
    },
    review: {
      title: "Technology Review",
      content: [
        {
          type: "paragraph",
          text: "We combine transformer-based language models with proprietary reinforcement learning algorithms to deliver context-aware, adaptive conversations."
        },
        {
          type: "ai-analysis",
          title: "AI Insight",
          content: "Technology stack rated 4.8/5 by industry benchmarks.",
          footnote: "AI-generated analysis based on company data and industry benchmarks"
        },
        {
          type: "tech-features",
          features: [
            {
              title: "Transformer Models",
              description: "State-of-the-art language understanding with billions of parameters"
            },
            {
              title: "Reinforcement Learning",
              description: "Proprietary algorithms that continuously improve through interaction"
            }
          ]
        },
        {
          type: "testimonials",
          title: "Industry Recognition",
          items: [
            {
              quote: "\"OmniaGPT sets a new standard for conversational AI in enterprise applications.\"",
              source: "- AI Technology Review"
            },
            {
              quote: "\"The adaptive learning capabilities demonstrate significant improvements over baseline models.\"",
              source: "- Journal of Machine Learning"
            }
          ]
        }
      ]
    }
  };

  const features = [
    {
      title: "24/7 Availability",
      description: "Always on, always correct, and always there, your assistant does not take breaks.",
      icon: "⏰"
    },
    {
      title: "Global Reach, Local Impact",
      description: "Reliable all around the world with local delivery. Reliable guaranteed.",
      icon: "🌍"
    },
    {
      title: "Appointment Automated",
      description: "Scheduling and reminders done immediately; no manual work.",
      icon: "📅"
    },
    {
      title: "Maximized ROI",
      description: "Secure, efficient, and designed to deliver higher business returns.",
      icon: "📈"
    }
  ];

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-lg leading-relaxed text-gray-300 mb-4 justify-center"
            >
              {item.text}
            </motion.p>
          );
        case "heading":
          return (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400" 
            >
              {item.text}
            </motion.h2>
          );
        case "ai-analysis":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border-l-4 border-teal-400 text-left shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mb-6" 
            >
              <p className="italic mb-2 text-teal-300 font-medium">{item.title}:</p>
              <p className="text-gray-200">{item.content}</p>
              <p className="text-sm text-gray-400 mt-2">{item.footnote}</p>
            </motion.div>
          );
        case "team-members":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" 
            >
              {item.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-b from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20" 
                >
                  <div className="text-4xl mb-3">{member.icon}</div> 
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    {member.title}
                  </h3>
                  <p className="text-gray-300">{member.description}</p>
                </motion.div>
              ))}
            </motion.div>
          );
        case "tech-features":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" 
            >
              {item.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-b from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
                >
                  <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          );
        case "testimonials":
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-12" 
            >
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                {item.title}
              </h3>
              <div className="space-y-4"> 
                {item.items.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-teal-400 pl-6 py-3 text-left bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-r-lg hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300"
                  >
                    <p className="font-medium text-lg text-gray-200 italic">"{testimonial.quote}"</p>
                    <p className="text-gray-400 mt-1">{testimonial.source}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        default:
          return null;
      }
    });
  };

  return (
    
        <div className="bg-[#080a1a] text-white relative overflow-hidden about font-sans">
          <main className="relative sm:px-6 max-w-7xl mx-auto flex flex-col items-center"> 
            <div className="absolute inset-0 bg-cover opacity-10 z-0" />

            <div className="relative z-10 space-y-6 w-full flex flex-col items-center">
              <section className="mb-6 text-center w-full flex flex-col items-center"> 
                <TextReveal
                  phrases={[
                    "---Neural Network Technology--",
                    "---Cutting Edge Research---",
                    "---AI-Powered Platform---",
                  ]}
                  color="green"
                  size="text-2xl md:text-2xl justify-center"
                  className="mb-4 font-bold tracking-tight"
                />
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent" 
                >
                  About our AI Technology
                </motion.h1>

                <div className="flex flex-wrap gap-3 mb-6 justify-center relative">
                  {["mission", "team", "review"].map((tab) => (
                    <motion.button
                      key={tab}
                      onMouseEnter={() => setHoveredTab(tab)}
                      onMouseLeave={() => setHoveredTab(null)}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 rounded-full transition-all duration-300 relative overflow-hidden z-10 ${
                        activeTab === tab
                          ? "text-white"
                          : "text-teal-400 hover:text-white"
                      } font-medium capitalize text-sm`}
                    >
                      {tab}
                      {(hoveredTab === tab || activeTab === tab) && (
                        <motion.span 
                          layoutId="tabBackground"
                          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full z-[-1]"
                          initial={false}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {activeTab !== tab && hoveredTab !== tab && (
                        <span className="absolute inset-0 border-2 border-teal-400 rounded-full z-[-1]" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </section>

              {/* Added border container here */}
              <div className="min-h-[40vh] w-full flex flex-col items-center text-center justify-center border border-teal-400/30 rounded-xl p-6 bg-gray-900/50 backdrop-blur-sm">
                <motion.section
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 max-w-4xl w-full"
                >
                  {renderContent(tabData[activeTab].content)}
                </motion.section>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 max-w-6xl w-full"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Why Our AI Stands Out
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 p-5 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 group"
                  >
                    <div className="text-3xl mb-3 group-hover:text-teal-400 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </main>

          <BackgroundBeams />
        </div>
  );
};

export default About;