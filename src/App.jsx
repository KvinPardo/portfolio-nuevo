import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="relative mx-auto overflow-hidden">
      <Header />

      <div className="container mx-auto lg:px-0 px-8 z-50">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default App;
