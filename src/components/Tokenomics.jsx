import React from "react";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-12 px-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">📊 Tokenomics</h3>
      <ul className="space-y-2 text-zinc-300">
        <li>💰 Total Supply: 100,000,000 FOJ</li>
        <li>🎁 Airdrop Allocation: 20%</li>
        <li>🏛 DAO Treasury: 30%</li>
        <li>👨‍💻 Dev Team: 15% (12-month lock)</li>
        <li>🌐 Ecosystem + LP: 25%</li>
        <li>🔥 Burn Reserve: 10%</li>
      </ul>
    </section>
  );
};

export default Tokenomics;
