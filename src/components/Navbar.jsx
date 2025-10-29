import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Faculty", "News", "Results", "Questions"];

  return (
    <nav className="bg-[#1e293b] text-white px-6 py-3 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761482513/rh%20acamdey.jpg"
            alt="R H Academy Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-2xl font-bold tracking-wide drop-shadow-md">
            R H ACADEMY
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1e293b] transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-20 px-6 text-lg font-medium">
          {navItems.map((item, idx) => (
            <li
              key={item}
              className={`block py-2 px-4 rounded mb-2 hover:bg-blue-700 transition-all transform duration-300 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}




// with another style 
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = ["Home", "About", "Academics", "News", "Results", "Questions"];

//   return (
//     <nav className="bg-[#1e293b] text-white px-6 py-3 shadow-lg sticky top-0 z-50">
//       <div className="flex justify-between items-center">
//         {/* Logo & Name */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761482513/rh%20acamdey.jpg"
//             alt="R H Academy Logo"
//             className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
//           />
//           <h1 className="text-2xl font-bold tracking-wide drop-shadow-md">
//             R H ACADEMY
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-lg font-medium">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="relative hover:text-white after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Icon */}
//         <div
//           className="md:hidden flex flex-col gap-1 cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
//           <span className={`block h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
//           <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-max-h duration-300 ${
//           isOpen ? "max-h-60" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-4 mt-4 text-lg font-medium">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="block py-2 px-4 hover:bg-blue-700 rounded transition-colors"
//                 onClick={() => setIsOpen(false)} // close menu when link clicked
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
