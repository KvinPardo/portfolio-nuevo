import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="relative">
      <div className="bg-primary fixed left-0 top-0 h-screen w-[60px] z-50">
        <Sidebar />
      </div>

      <div className="lg:px-[100px] w-full mx-auto pl-[70px] flex justify-between items-center backdrop-blur-xl z-10 fixed h-[70px]">
        <Header />
      </div>

      <div className="container mx-auto relative lg:px-0 pl-[70px]">
        <Hero />
        <About />
        <Project />
        <Experience />
        {/* <Contact /> */}
      </div>
    </div>
  );
};

export default App;
