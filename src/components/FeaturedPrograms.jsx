import React from "react";

const programs = [
  {
    title: "Engineering",
    description: "Explore the world Enginerring, with the help of our fineest faculty",
    image: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761762404/engineering.jpg",
  },
  {
    title: "Boards",
    description: "Get the highest possible marks in all the scince subjects.",
    image: "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Medical",
    description: "Acheive your dream , Be a Life savor , Be a Doctor",
    image: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761762402/medical.jpg",
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Programs</h2>

        {/* Vertical stacking on mobile, grid on md+ */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
