import React from "react";

const programs = [
  {
    title: "Engineering",
    description:
      "Explore the world of Engineering with the help of our finest faculty.",
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761762404/engineering.jpg",
  },
  {
    title: "Boards",
    description:
      "Get the highest possible marks in all the science subjects.",
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1763364507/IMG-20251029-WA0027_pstvig.jpg",
  },
  {
    title: "Medical",
    description:
      "Achieve your dream. Be a life saver. Be a doctor.",
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761762402/medical.jpg",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-56 flex items-center justify-center bg-gray-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="max-h-56 w-auto object-contain rounded-t-lg transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
