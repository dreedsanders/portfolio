import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import About from "./Components/About"
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {

  return (
    <div>
      {/* <Header/> */}
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
