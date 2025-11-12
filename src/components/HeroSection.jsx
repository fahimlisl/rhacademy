import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-[#1e293b] text-white flex items-center justify-center min-h-[80vh] overflow-hidden rounded-b-1xl shadow-lg">

      <img
        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1920&q=80"
        alt="School Campus"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fadeInUp" style={{ fontFamily: "'Old Standard TT', serif" }}>
          R H ACADEMY
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fadeInUp delay-200">
          Welcome to <span className="font-semibold text-white">R H Academy</span> — we inspire curiosity, creativity, and critical thinking in every student. Our goal is to help learners discover their passions, explore new possibilities, and grow into confident individuals ready to make a difference in the world.
        </p>
        {/* <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105 animate-fadeInUp delay-300">
          Explore Academy
        </button> */}
      </div>

      {/* Optional soft gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#1e293b] to-transparent"></div>
    </section>
  );
}
