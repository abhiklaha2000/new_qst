import React, { useRef } from 'react'
import Section from '../components/Section'
import { aiWellnessLogo, avatarLogo } from '../assets';

const Portfolio = () => {
    const parallaxRef = useRef(null);
    const projects = [
  {
    title: "AI Chatbot App",
    image: avatarLogo,
    link: "#",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "AI Wellness Voting App",
    image: aiWellnessLogo,
    link: "https://angelsofalignment.org/vote/",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Blogging Platform",
    image: "https://via.placeholder.com/600x400",
    link: "#",
    color: "bg-pink-600 hover:bg-pink-700",
  },
  {
    title: "Landing Page",
    image: "https://via.placeholder.com/600x400",
    link: "#",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/600x400",
    link: "#",
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Custom Web App",
    image: "https://via.placeholder.com/600x400",
    link: "#",
    color: "bg-red-600 hover:bg-red-700",
  },
];
  return (
    <Section className="pt-[9rem] -mt-[8.50rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
      <div className="container relative mb-[5rem]" ref={parallaxRef}>
        <div className="container relative text-black" ref={parallaxRef}>
             <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-center text-4xl mb-4 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">Our Portfolio</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore some of the amazing projects we've delivered.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full object-cover h-48"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-white px-5 py-2 rounded-full transition ${project.color}`}
              >
                Visit Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>

      </div>
    </Section>
  )
}

export default Portfolio