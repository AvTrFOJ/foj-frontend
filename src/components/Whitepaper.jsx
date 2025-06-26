import React from "react";

const Whitepaper = () => {
  return (
    <section id="whitepaper" className="py-12 px-6 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-purple-400">📄 Whitepaper</h3>
      <iframe
        src="https://example.com/foj-whitepaper.pdf"
        title="FOJ Whitepaper"
        className="w-full h-[600px] border border-purple-500 rounded"
      ></iframe>
    </section>
  );
};

export default Whitepaper;
