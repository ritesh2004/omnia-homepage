import React from "react";
import Home from "./pages/Home";
import { BackgroundBeams } from "./components/ui/background_beams";
import About from "./pages/About";
import Footer from "./pages/footer";
import Services from "./pages/Services";
import Form from "./pages/Form";

const App = () => {
  return (
    <div className="relative">
      <Home/>
      <About/>
      <Services/>
      <Form/>
      <Footer />
    </div>
  )
}

export default App;