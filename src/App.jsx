import React from "react";
import Home from "./pages/Home";
import { BackgroundBeams } from "./components/ui/background_beams";
import About from "./pages/About";
import Footer from "./pages/footer";

const App = () => {
  return (
    <div className="relative">
      <Home/>
      <About/>
      <Footer />
    </div>
  )
}

export default App;