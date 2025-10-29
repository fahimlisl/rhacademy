import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Building Minds, Shaping Futures",
    text: "Empowering students with knowledge and integrity to lead tomorrow.",
    img: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761568994/IMG-20251027-WA0034_xhrhq2.jpg",
  },
  {
    id: 2,
    title: "Excellence in Every Step",
    text: "Where learning meets inspiration — nurturing curious and confident thinkers.",
    img: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761568994/IMG-20251027-WA0032_bwzdh0.jpg",
  },
  {
    id: 3,
    title: "Discover. Learn. Grow.",
    text: "Join R H Academy and unlock your potential through quality education.",
    img: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761569354/IMG-20251027-WA0030_aqraex.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Detect swipe
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    if (!touchStartX) return;
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        setCurrent((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe right
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="relative bg-[#1e293b] text-white min-h-[85vh] mt-1 flex items-center justify-center overflow-hidden rounded-b-1xl shadow-lg select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/70 to-transparent"></div>

          <div className="relative z-20 max-w-3xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[85vh]">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
              style={{ fontFamily: "'Old Standard TT', serif" }}
            >
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              {slide.text}
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105">
              Explore Academy
            </button>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-teal-400 w-6" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
