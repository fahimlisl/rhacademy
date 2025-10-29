import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import HeroSection from '../components/HeroSection.jsx'
import HeroCarousel from '../components/HeroCarousel.jsx'
import FeaturedPrograms from '../components/FeaturedPrograms.jsx'
import Achievements from '../components/Achievements.jsx'
function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <HeroCarousel />
    <FeaturedPrograms />
    <Achievements />
    <Footer />
    </>
    

  )
}

export default Home