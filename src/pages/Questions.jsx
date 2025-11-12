import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const pyqData = {
  Boards: [
    {
      title: "Science PYQ 2024",
      date: "June 10, 2024",
      fileType: "pdf",
      fileUrl: "#",
    },
    {
      title: "Science PYQ 2023",
      date: "June 12, 2023",
      fileType: "pdf",
      fileUrl:
        "#",
    },
  ],
  Engineering: [
    {
      title: "Arts PYQ 2024",
      date: "June 11, 2024",
      fileType: "pdf",
      fileUrl: "#",
    },
  ],
  Medical: [
    {
      title: "NEET mock test 2",
      date: "October 20 , 2025",
      fileType: "pdf",
      fileUrl:
        "https://drive.google.com/file/d/1LWzB98v77ymnejaF3cRtaBLkQmSzW1lL/view?usp=drivesdk",
    },
    {
      title: "NEET mock test unit 1 , 2 , 3 , 4",
      date: "October 20 , 2025",
      fileType: "pdf",
      fileUrl:
        "https://drive.google.com/file/d/1e-3lKmA6GuTsNk8QwFmIatcxUVku8lOn/view?usp=drivesdk",
    },
  ],
};

export default function Questions() {
  const courses = Object.keys(pyqData);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1571091718760-c7e5f4140b70?auto=format&fit=crop&w=1600&q=60"
          alt="Questions Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
            Previous Year Questions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8">
        {/* Course Tabs */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => setSelectedCourse(course)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCourse === course
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pyqData[selectedCourse].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >
              {/* Thumbnail */}
              {item.fileType === "image" ? (
                <img
                  src={item.fileUrl}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-200">
                  <p className="text-gray-600 font-semibold text-lg">PDF File</p>
                </div>
              )}

              {/* Info Section */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.date}</p>

                {/* Buttons */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {/* Open in New Tab */}
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-center text-sm transition"
                  >
                    View
                  </a>

                  {/* Download */}
                  <a
                    href={item.fileUrl}
                    download
                    className="flex-1 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 text-center text-sm transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
