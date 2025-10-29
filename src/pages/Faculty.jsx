import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// Sample faculty data
const facultyData = {
  Physics: [
    {
      name: "Rejaul Islam Gazi",
      qualification: "MSc,Bed",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Md.Waliur Rahaman",
      qualification: "MSc,Bed",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Ananta Sarkar ( Guest Teacher)",
      qualification: "MSc,Bed",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60",
    },
  ],
  Chemistry: [
    {
      name: "Dr.Habib Ali Molla",
      qualification: "Msc, Bed, PhD(Organic Chemistry)",
      img: "/habibur.jpeg",
    },
  ],
  Mathematics: [
    {
      name: "Md Arifbilla Mondal",
      qualification: "MSc,Bed",
      img: "https://images.unsplash.com/photo-1580894732444-8ecded7900d9?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Kutubuddin Khan",
      qualification: "Msc",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=60",
    },
  ],
  English: [
    {
      name: "Faruk Iftekhar ",
      qualification: "MA",
      img: "https://images.unsplash.com/photo-1554384645-13eab165c24b?auto=format&fit=crop&w=400&q=60",
    },
  ],
  Bengali: [
    {
      name: "Sk Nafisa",
      qualification: "MA",
      img: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761762141/nafisha-bengali.jpg",
    }
  ],
  Biolgoy: [
    {
      name: "Mijanur Rahman",
      qualification: "MBBS",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "SAMIM MONDAL",
      qualification: "Bsc,B Pharma",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=60",
    },
  ],
};

function Faculty() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1601933470928-c03d0c99b2a4?auto=format&fit=crop&w=1600&q=60"
          alt="Faculty Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Our Faculty
          </h1>
          <p className="text-gray-200 text-lg mt-2 px-4 text-center">
            Meet our experienced and dedicated educators guiding the next generation.
          </p>
        </div>
      </div>

      {/* Faculty Sections */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {Object.entries(facultyData).map(([subject, teachers]) => (
          <section key={subject} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3">
              {subject} Department
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teachers.map((teacher, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center flex flex-col items-center">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{teacher.qualification}</p>

                    {/* Decorative underline */}
                    <div className="w-12 h-[3px] bg-blue-600 mt-3 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}

export default Faculty;
