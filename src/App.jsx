import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Results from "./pages/Results.jsx";
import News from "./pages/News.jsx";
import Questions from "./pages/Questions.jsx";
import Faculty from "./pages/Faculty.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/results" element={<Results />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/faculty" element={<Faculty />} />
    </Routes>
  );
}

export default App;
