import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#1e293b] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About R H Academy</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Empowering students since 2008 — guiding aspiring engineers and doctors to reach their dreams.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0f172a] text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://imgs.search.brave.com/vA8Ps9HvhqYK6RcjSjL655KaI7y565yFPcUSURZrk0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIx/OTY4NjU1MC9waG90/by9lbGVtZW50YXJ5/LXN0dWRlbnRzLWxl/YXJuaW5nLWluLXRo/ZS1jb21wdXRlci1s/YWItd2l0aC10aGVp/ci10ZWFjaGVyLndl/YnA_YT0xJmI9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz0xVVRu/SXBUWmczZFlHQjNO/amktNlRKV0xFekVw/dmVLZ2Jjb3F5RVo0/ak9BPQ"
              alt="Students learning"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              RH Academy was founded by <b>Sk Nafisa</b> & <b>Dr. Habib Ali Molla</b> in 2008.  
              Established with a mission to guide NEET and JEE aspirants, RH Academy has produced countless success stories
              over the last 17 years. Today, our alumni excel across the globe in medicine, engineering, and research.
            </p>
            <h2 className="text-3xl font-bold mb-4">Our Facility</h2>
            <p className="text-gray-300 leading-relaxed">
              We provide well-equipped classrooms, digital learning tools, and a residential hostel facility for dedicated preparation.  
              Our teachers are renowned for their innovative teaching methods and deep commitment to every student’s growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1e293b] text-white py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what makes R H Academy stand apart from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Experienced Faculty", desc: "Our educators are passionate professionals dedicated to student success." },
            { title: "Smart Classrooms", desc: "Modern infrastructure with digital learning tools and interactive sessions." },
            { title: "Holistic Learning", desc: "Beyond books — we focus on creativity, sports, and leadership growth." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a] rounded-2xl shadow-md p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="bg-[#0f172a] text-white py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proud Alumni</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet some of our star achievers who once walked these very halls — now excelling in medicine, engineering, and beyond.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Md Fahim",
              img: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1761763940/fahim-alumini.jpg",
              desc: "B.Tech JAMIA MILIA ISLAMIA",
            },
            {
              name: "",
              img: "https://images.unsplash.com/photo-1603415526960-f7e0328e3e4a",
              desc: "IIT Bombay, CSE — The guidance and mock tests prepared me for every challenge JEE threw at me.",
            },
            {
              name: "Sana Malik",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
              desc: "NEET Topper (2023) — RH Academy made learning exciting and strategic. I owe my success to my mentors.",
            },
            {
              name: "Arjun Das",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
              desc: "IIT Kharagpur — RH Academy’s teachers didn’t just teach, they transformed the way I think and solve problems.",
            },
            {
              name: "Mitali Bose",
              img: "https://images.unsplash.com/photo-1614289371518-88be2cb5f3b0",
              desc: "MBBS, CMC Vellore — Every doubt cleared, every test analyzed — I still remember those sessions!",
            },
            {
              name: "Abir Hossain",
              img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
              desc: "IIT Madras — RH Academy built not just my knowledge but my confidence and resilience.",
            },
          ].map((alumni, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={alumni.img}
                alt={alumni.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{alumni.name}</h3>
                <p className="text-gray-300 text-sm">{alumni.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Be Our Next Success Story</h3>
          <p className="text-gray-400 mb-6">
            Join R H Academy and start your journey toward excellence today.
          </p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-[#1e293b] text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="/habibur.jpeg"
            alt="Founder"
            className="w-40 h-40 rounded-full object-cover border-2 border-white shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-3">A Message from Our Founder</h2>
            <p className="text-gray-300 italic">
              “At R H Academy, we don’t just teach — we inspire. 
              Our goal is to help every student discover their potential and shape a brighter future.”
            </p>
            <p className="text-gray-400 mt-3">— Dr. Habib, Founder & Authority</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
