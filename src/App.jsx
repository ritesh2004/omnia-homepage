import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/footer";
import Services from "./pages/Services";
import Form from "./pages/Form";
import { Navbar } from "./components/Navbar";
import { BackgroundBeams } from "./components/ui/background_beams";

const App = () => {
  return (
    <div className="scroll-smooth bg-[#080a1a] text-white">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="contact">
          <Form />
        </section>
      </main>
      
      <Footer />
      <BackgroundBeams />
    </div>
  );
};

export default App;