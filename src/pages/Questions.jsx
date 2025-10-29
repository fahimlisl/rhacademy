import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// Sample PYQ data
const pyqData = {
  Boards: [
    {
      title: "Science PYQ 2024",
      date: "June 10, 2024",
      fileType: "pdf",
      fileUrl: "/questions/H_31623320_cvqqqg.pdf",
    },
    {
      title: "Science PYQ 2023",
      date: "June 12, 2023",
      fileType: "pdf",
      fileUrl: "https://drive.google.com/file/d/14a2u-UfIWY2jRVEESeYwrrdLhk59zGwH/view?usp=drive_link",
    },
  ],
  Engineering: [
    {
      title: "Arts PYQ 2024",
      date: "June 11, 2024",
      fileType: "pdf",
      fileUrl: "/questions/arts_pyq_2024.pdf",
    },
  ],
  Medical: [
    {
      title: "Commerce PYQ 2024",
      date: "June 9, 2024",
      fileType: "pdf",
      fileUrl: "/questions/commerce_pyq_2024.pdf",
    },
  ],
};

export default function Questions() {
  const courses = Object.keys(pyqData);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ fileType: "", fileUrl: "", title: "" });

  const openModal = (item) => {
    setModalContent(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ fileType: "", fileUrl: "", title: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
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

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.date}</p>

                {/* Buttons */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  <button
                    onClick={() => openModal(item)}
                    className="flex-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-center text-sm transition"
                  >
                    View
                  </button>
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

      {/* Modal */}
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
