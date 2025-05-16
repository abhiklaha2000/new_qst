import React, { useRef } from 'react'
import Section from '../components/Section'
import { aiWellnessLogo, avatarLogo } from '../assets';

const Portfolio = () => {
    const parallaxRef = useRef(null);
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings >
      <div className="container relative mb-[5rem]" ref={parallaxRef}>
        {/* <marquee className="text-4xl text-blue-900 mt-16">Coming Soon...</marquee> */}
        <div className="container relative text-black" ref={parallaxRef}>
              <div className="flex">
                <span className="block w-8 h-2 mt-5 rounded bg-gradient-to-r from-blue-300 to-transparent"></span>
                <span className='text-start font-roboto mt-3 ml-2 font-bold text-red-700 uppercase'>Our Project Showcase</span>
              </div>
              <h1 className="text-center text-4xl mb-4 mt-5 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">
                  Let’s Look Into Our Project Gallery
              </h1>
              <div className='w-full md:flex md:flex-wrap '>
                <div className='w-full h-auto border-[2px] border-solid border-black-100 md:basis-1/3 md:w-[300px] md:flex lg:basis-1/3 lg:flex lg:w-[400px] lg:flex xl:basis-1/3 xl:w-[500px] xl:flex'>
                    <a href="https://angelsofalignment.org/vote/" target="#">
                        <img src={aiWellnessLogo} alt="Angels of Alignment" className='object-cover' />
                    </a>
                </div>
                <div className='w-full h-auto border-[2px] border-solid border-black-100 md:basis-1/3 md:w-[300px] md:flex lg:basis-1/3 lg:flex lg:w-[400px] lg:flex xl:basis-1/3 xl:w-[500px] xl:flex'>
                    <a href="https://main.ddm4ys1jd4rj4.amplifyapp.com/" target="#">
                        <img src={avatarLogo} alt="Angels of Alignment" className='object-cover' />
                    </a>
                </div>
                {/* <div className='w-full h-auto border-[2px] border-solid border-black-100 md:basis-1/3 md:w-[300px] md:flex lg:basis-1/3 lg:flex lg:w-[400px] lg:flex xl:basis-1/3 xl:w-[500px] xl:flex'>
                    <a href="https://angelsofalignment.org/vote/" target="#">
                        <img src={aiWellnessLogo} alt="Angels of Alignment" className='object-cover' />
                    </a>
                </div> */}
                {/* <div className='w-full h-auto border-[2px] border-solid border-black-100 md:basis-1/3 md:w-[300px] md:flex lg:basis-1/3 lg:flex lg:w-[400px] lg:flex xl:basis-1/3 xl:w-[500px] xl:flex'>
                    <a href="https://angelsofalignment.org/vote/" target="#">
                        <img src={aiWellnessLogo} alt="Angels of Alignment" className='object-cover' />
                    </a>
                </div>
                <div className='w-full h-auto border-[2px] border-solid border-black-100 md:basis-1/3 md:w-[300px] md:flex lg:basis-1/3 lg:flex lg:w-[400px] lg:flex xl:basis-1/3 xl:w-[500px] xl:flex'>
                    <a href="https://angelsofalignment.org/vote/" target="#">
                        <img src={aiWellnessLogo} alt="Angels of Alignment" className='object-cover' />
                    </a>
                </div> */}
              </div>
        </div>

      </div>
    </Section>
  )
}

export default Portfolio