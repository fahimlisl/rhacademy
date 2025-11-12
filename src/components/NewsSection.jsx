import React from "react";

const featuredNews = {
  title: "Annual Science Fair 2025",
  date: "October 15, 2025",
  image: "https://images.unsplash.com/photo-1581092795360-5d3d64e11b3b?auto=format&fit=crop&w=800&q=60",
  excerpt:
    "Our students showcased amazing projects at the Annual Science Fair. The event was a huge success, with innovations ranging from robotics to eco-friendly energy solutions.",
};

const newsList = [
  {
    title: "Sports Day Celebration",
    date: "September 28, 2025",
    image: "https://images.unsplash.com/photo-1600047505897-d99c7b49c7f8?auto=format&fit=crop&w=400&q=60",
    excerpt: "Our annual Sports Day was filled with energy, team spirit, and sportsmanship across all grades.",
  },
  {
    title: "Art Exhibition Winners",
    date: "September 10, 2025",
    image: "https://images.unsplash.com/photo-1528747045269-390fe33c19a6?auto=format&fit=crop&w=400&q=60",
    excerpt: "Students displayed their artistic talents. Winners were awarded for creativity and technique.",
  },
  {
    title: "New Library Inauguration",
    date: "August 20, 2025",
    image: "https://images.unsplash.com/photo-1556514767-8e48f6a76c55?auto=format&fit=crop&w=400&q=60",
    excerpt: "Our new library provides a modern reading space with thousands of books and digital resources.",
  },
  {
    title: "Math Olympiad Achievements",
    date: "July 30, 2025",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=60",
    excerpt: "Students excelled at the national Math Olympiad, winning multiple gold and silver medals.",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-gray-300">

      <div className="relative w-full h-64 md:h-96 ">
        <img
          src="https://images.unsplash.com/photo-1600047505897-d99c7b49c7f8?auto=format&fit=crop&w=1600&q=60"
          alt="School News Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
            Latest News & Updates
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12 ">

        <div className="md:flex md:gap-8 shadow-lg rounded-lg overflow-hidden bg-gray-50">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredNews.title}</h2>
            <p className="text-gray-500 mb-4">{featuredNews.date}</p>
            <p className="text-gray-700 mb-4">{featuredNews.excerpt}</p>
            <button className="self-start bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newsList.map((news, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{news.title}</h3>
                <p className="text-gray-500 text-sm">{news.date}</p>
                <p className="text-gray-700 text-sm">{news.excerpt}</p>
                <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-6">
          {/* <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            Load More News
          </button> */}
        </div>
      </div>
    </section>
  );
}
