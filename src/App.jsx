import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative">
      <div className="bg-primary fixed left-0 top-0 h-screen w-[60px] z-50">
        <Sidebar />
      </div>

      <div className="lg:px-[100px] w-full mx-auto pl-[70px] flex justify-between items-center backdrop-blur-xl z-10 fixed h-[70px]">
        <Header />
      </div>

      <div className="container mx-auto pl-[80px]">
        <Hero />
        <About />
        <Project />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
