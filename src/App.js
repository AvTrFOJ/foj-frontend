import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WalletPanel from "./components/WalletPanel";
import Tokenomics from "./components/Tokenomics";
import BurnSchedule from "./components/BurnSchedule";
import Whitepaper from "./components/Whitepaper";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black text-white">
      <Navbar />
      <Hero />
      <WalletPanel />
      <Tokenomics />
      <BurnSchedule />
      <Whitepaper />
      <Footer />
    </div>
  );
}

export default App;
