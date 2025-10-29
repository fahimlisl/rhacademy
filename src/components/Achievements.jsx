import React from "react";

const stats = [
  { number: "150+", label: "Students Enrolled" },
  // { number: "100%", label: "Pass Rate" },
  // { number: "5+", label: "Awards Won" },
  { number: "10" , label: "No of faculty" },
  { number: "9", label: "Years of Excellence" },
];

export default function Achievements() {
  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg py-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
