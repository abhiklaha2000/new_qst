import React from 'react'

const ServiceOffer = () => {
  return (
  <section class="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 md:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-center text-4xl mb-4 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">Our Services</h2>
    <p className="text-lg text-gray-600 mb-12">We offer a wide range of digital solutions tailored to your needs.</p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    
      <div className="bg-white border-t-4 border-blue-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">AI Chatbot Making (AI Avatar)</h3>
        <p className="text-gray-700">Build intelligent, human-like avatars for automated conversations.</p>
      </div>

      <div className="bg-white border-t-4 border-green-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-green-600 mb-2">E-Commerce Website Making</h3>
        <p className="text-gray-700">Custom-built online stores designed for performance and sales.</p>
      </div>

      <div className="bg-white border-t-4 border-pink-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-pink-600 mb-2">Blogging Website Making</h3>
        <p className="text-gray-700">Modern blogs for personal or business content with easy management.</p>
      </div>

      <div className="bg-white border-t-4 border-yellow-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-yellow-600 mb-2">Landing Page Design</h3>
        <p className="text-gray-700">High-converting pages for your marketing campaigns or products.</p>
      </div>

      <div className="bg-white border-t-4 border-purple-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-purple-600 mb-2">Custom Web-Based Apps</h3>
        <p className="text-gray-700">We build any type of web application tailored to your business needs.</p>
      </div>
    </div>
  </div>
</section>


  )
}

export default ServiceOffer