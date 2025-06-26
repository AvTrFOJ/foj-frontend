import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <img src="https://i.imgur.com/HduNgJ5.png" alt="FOJ Logo" className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-4xl font-bold text-purple-400">AvTrFOJ (FOJ)</h2>
      <p className="text-lg mt-2 max-w-md text-zinc-300">The official governance token of NexDAO. Burnable. Powerful. Built on Nexus Layer 1.</p>
    </section>
  );
};

export default Hero;
