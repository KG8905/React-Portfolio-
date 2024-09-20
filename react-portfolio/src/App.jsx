// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/ Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";  // Import Footer

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main>
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />  {/* Add Footer here */}
    </div>
  );
}

export default App;