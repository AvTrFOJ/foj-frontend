import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const owner = "0x4584cb3c5b23698d8a4e5c5588b73f665e36c024".toLowerCase();
const FOJ_ADDRESS = "0xDcacB3Aed5D267235236CFCd2303fFaabEea340d";
const ABI = ["function transfer(address to, uint256 amount) public returns (bool)"];

const WalletPanel = () => {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("100");
  const [addresses, setAddresses] = useState([]);
  const [status, setStatus] = useState("");

  const connect = async () => {
    const accs = await window.ethereum.request({ method: "eth_requestAccounts" });
    setWallet(accs[0]);
  };

  const disconnect = () => {
    setWallet("");
    setStatus("🔌 Disconnected");
  };

  const handleUpload = (e) => {
    const reader = new FileReader();
    reader.onload = evt => {
      try {
        const list = JSON.parse(evt.target.result);
        setAddresses(list);
      } catch {
        setStatus("❌ Invalid file");
      }
    };
    reader.readAsText(e.target.files[0]);
  };

  const airdrop = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const token = new ethers.Contract(FOJ_ADDRESS, ABI, signer);
    for (const addr of addresses) {
      try {
        const tx = await token.transfer(addr, ethers.parseUnits(amount, 18));
        await tx.wait();
        setStatus(`✅ Sent ${amount} FOJ to ${addr}`);
      } catch {
        setStatus(`❌ Failed to send to ${addr}`);
      }
    }
  };

  return (
    <section id="wallet" className="py-12 px-4 text-center">
      <h3 className="text-2xl font-bold mb-4">🎮 Wallet Tools</h3>
      {wallet ? (
        <>
          <button onClick={disconnect} className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded mr-2">Disconnect Wallet</button>
          <span className="text-sm text-green-400">Connected: {wallet}</span>
        </>
      ) : (
        <button onClick={connect} className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded">Connect Wallet</button>
      )}

      {wallet.toLowerCase() === owner && (
        <div className="mt-6">
          <p className="mb-2">Upload address list (.json):</p>
          <input type="file" onChange={handleUpload} className="mb-4" />
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="text-black p-2 rounded mb-4" />
          <button onClick={airdrop} className="bg-purple-700 hover:bg-purple-500 px-4 py-2 rounded">Airdrop</button>
          <p className="mt-2 text-sm">{status}</p>
        </div>
      )}
    </section>
  );
};

export default WalletPanel;
