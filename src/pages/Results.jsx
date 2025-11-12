import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const resultsData = {
  Board: [
    {
      title: "Class 11",
      date: "Comming soon",
      fileType: "pdf",
      fileUrl: "/results/science_term1.pdf",
    },
    {
      title: "Class 12",
      date: "Comming soon",
      fileType: "image",
      fileUrl: "https://images.unsplash.com/photo-1581092795360-5d3d64e11b3b?auto=format&fit=crop&w=400&q=60",
    },
  ],
  Engineering: [
    {
      title: "Session 2025-26",
      date: "Comming soon",
      fileType: "pdf",
      fileUrl: "/results/arts_term1.pdf",
    },
  ],
  Medical: [
    {
      title: "Session 2025-26",
      date: "Comming soon",
      fileType: "pdf",
      fileUrl: "/results/commerce_term1.pdf",
    },
  ],
};

export default function Results() {
  const courses = Object.keys(resultsData);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ fileType: "", fileUrl: "", title: "" });

  const openModal = (result) => {
    setModalContent(result);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ fileType: "", fileUrl: "", title: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />


      <div className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1571091718760-c7e5f4140b70?auto=format&fit=crop&w=1600&q=60"
          alt="Results Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
            Student Results
          </h1>
        </div>
      </div>


      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8">

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
          {courses.map((course) => (
            <button
              key={course}
              onClick={() => setSelectedCourse(course)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCourse === course
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {course}
            </button>
          ))}
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resultsData[selectedCourse].map((result, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >

              {result.fileType === "image" ? (
                <img
                  src={result.fileUrl}
                  alt={result.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-200">
                  <p className="text-gray-600 font-semibold text-lg">PDF File</p>
                </div>
              )}


              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{result.title}</h3>
                <p className="text-gray-500 text-sm">{result.date}</p>


                <div className="flex gap-2 mt-2 flex-wrap">
                  <button
                    onClick={() => openModal(result)}
                    className="flex-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-center text-sm transition"
                  >
                    View
                  </button>
                  <a
                    href={result.fileUrl}
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


        {resultsData[selectedCourse].length > 4 && (
          <div className="flex justify-center mt-6">
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
              Load More Results
            </button>
          </div>
        )}
      </main>


      <Footer />


      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-lg"
              onClick={closeModal}
            >
              ×
            </button>

            <h2 className="font-bold text-xl mb-4">{modalContent.title}</h2>

            {modalContent.fileType === "image" ? (
              <img
                src={modalContent.fileUrl}
                alt={modalContent.title}
                className="w-full h-auto object-cover rounded"
              />
            ) : (
              <iframe
                src={modalContent.fileUrl}
                className="w-full h-[70vh]"
                title={modalContent.title}
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
