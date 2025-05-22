import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Acme Inc.',
    content: 'This product completely transformed our workflow. The ease of use and incredible features saved us countless hours of work. Highly recommended!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'TechStart',
    content: 'Exceptional customer support and a robust platform. We evaluated many solutions and this was clearly the best choice for our needs.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Product Manager',
    company: 'InnovateCo',
    content: 'The implementation was seamless and the results were immediate. Our team adapted quickly and we saw ROI within the first month.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const TestimonialComponent = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span 
        key={i} 
        className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center" data-aos="zoom-in">
      <h2 className="text-4xl mb-[35px] font-bold !text-center text-blue-900 mb-2 inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">What Our Clients Say</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mx-auto max-w-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic text-lg md:text-xl mb-6">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev after:text-blue-500 after:text-2xl mt-4"></div>
        <div className="swiper-button-next after:text-blue-500 after:text-2xl mt-4"></div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination mt-6 relative"></div>
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;