import React, { useRef } from 'react';
import Section from '../components/Section';
import { FaArrowRightLong } from 'react-icons/fa6';

const AboutUs = () => {
    const parallaxRef = useRef(null);
    return (
        <Section  className="pt-[5rem] -mt-[4.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings>
            <div className="container relative text-black md:mt-2 xl:mt-4" ref={parallaxRef}>
                <h1 data-aos="flip-left" className="text-center text-4xl mb-4 text-blue-900 font-bold relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2">
                    About Quantum Shift Technologies
                </h1>
                <p className="text-xl text-start mt-4 mb-6 font-roboto md:mb-[40px] xl:mb-[50px]">
                    Quantum Shift Technologies, founded in 2022 by a team with over 12 years of IT experience, delivers modern, tailored solutions that drive business growth and transformation. Our expertise includes building scalable web applications with the MERN stack, deploying secure and reliable solutions on AWS, and creating intelligent AI avatars that enhance user engagement. With a certified and versatile team, we combine technical excellence with a collaborative approach to help organizations innovate, streamline operations, and achieve lasting success in the digital era.
                </p>
            </div>
        </Section>
    );
};

export default AboutUs;