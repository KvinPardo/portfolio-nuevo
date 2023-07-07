import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="relative">
      <div className="bg-primary fixed left-0 top-0 h-screen w-[70px]">
        <Sidebar />
      </div>

      <div className="px-[100px] h-[70px] flex justify-between items-center">
        <Header />
      </div>

      <div className="container mx-auto">
        <Hero/>
        <About />
      </div>
    </div>
  );
};

export default App;
