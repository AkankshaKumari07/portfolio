"use client";

import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-black text-white py-12 px-4">
      {/* Certificate Heading with Glow Effect */}
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide text-center animate-pulse">
        🎓 My Certificate
      </h1>

      {/* Certificate Frame with Shadow & Hover Effect */}
      <div className="relative group w-full max-w-6xl rounded-2xl overflow-hidden border-4 border-gray-500 shadow-2xl transition-transform transform hover:scale-105 duration-500">
        <iframe
          src="/images/Newton Certification.pdf"
          className="w-full h-[680px] border-none"
        />
      </div>
    </div>
  );
};

export default Page;
