import { awsLogo , oracleLogo, sapLogo , osLogo , reactlogo, nodelogo, mongodblogo , mysqlLogo} from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { useEffect, useRef, useState } from "react";
import Notification from "../components/Notification";
import PlusSvg from "../assets/svg/PlusSvg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Marquee from "react-fast-marquee";
import { Autoplay } from 'swiper/modules';
import FirstSlide from "../assets/hero/first.png";
import SecondSlide from "../assets/hero/second.png";
import ThirdSlide from "../assets/hero/third.png";
const BackgroundCircles = ({ parallaxRef }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
            <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />

            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                    <div className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    <div className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                    <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>

                <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                    <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
                </div>
            </MouseParallax>
        </div>
    );
};

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section className=" " crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="relative" ref={parallaxRef}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    effect={'fade'}

                    // navigation    
                    autoplay={{
                        delay: 5000, // 2 seconds
                        disableOnInteraction: false, // Keeps autoplay running even after user interaction
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="h-[57vh] md:h-[60vh] lg:h-[90vh]"
                >
                    <SwiperSlide className="h-[200px] flex items-center justify-center">
                        <div className="relative w-[100vw] h-[57vh] md:h-[60vh] lg:h-[90vh]">
                            {/* Render the image using <img> */}
                            <img
                                src={FirstSlide}
                                alt="Slide Image"
                                className="w-[100vw] h-[57vh] md:h-[60vh] lg:h-[90vh] object-fit"
                            />
                            {/* Content positioned absolutely over the image */}
                            <div className="absolute inset-0 bg-black/10 flex flex-col items-start justify-center text-center z-10 p-4 lg:m-[100px]">
                                <p className="w-full md:w-[45vw] text-white font-bold text-[1.1rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[2.5rem] mb-4 leading-relaxed text-left">
                                    Explore the Possibilities of Development Connect with Quantum Shift Technologies
                                </p>
                                <p className="w-full md:w-[45vw] text-white/70 text-[0.9rem] sm:text-[1rem] md:text-[2rem] lg:text-[1rem] mb-4 leading-relaxed text-left">
                                    Quantum Shift Technologies specializes in MERN stack development and AI avatars for modern digital solutions.
                                </p>
                                <button href="#pricing" className="text-[0.875rem] sm:text-[1rem] p-2 sm:p-3 bg-red-600 rounded">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-[200px] flex items-center justify-center">
                        <div className="relative w-[100vw] h-[57vh] md:h-[60vh] lg:h-[90vh]">
                            {/* Render the image using <img> */}
                            <img
                                src={SecondSlide}
                                alt="Slide Image"
                                className="w-[100vw] h-[57vh] md:h-[60vh] lg:h-[90vh] object-fit"
                            />
                            {/* Content positioned absolutely over the image */}
                            <div className="absolute inset-0 bg-black/10 flex flex-col items-start justify-center text-center z-10 p-4 lg:m-[100px]">
                                <p className="w-full md:w-[45vw] text-white font-bold text-[1.1rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[2.5rem] mb-4 leading-relaxed text-left">
                                    Explore the Possibilities of Development Connect with Quantum Shift Technologies
                                </p>
                                <p className="w-full md:w-[45vw] text-white/70 text-[0.9rem] sm:text-[1rem] md:text-[2rem] lg:text-[1rem] mb-4 leading-relaxed text-left">
                                    Quantum Shift Technologies specializes in MERN stack development and AI avatars for modern digital solutions.
                                </p>
                                <button href="#pricing" className="text-[0.875rem] sm:text-[1rem] p-2 sm:p-3 bg-red-600 rounded">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="h-[200px] flex items-center justify-center">
                        <div className="relative w-[100vw] h-[57vh] md:h-[60vh] lg:h-[90vh]">
                            {/* Render the image using <img> */}
                            <img
                                src={ThirdSlide}
                                alt="Slide Image"
                                className="w-[100vw] h-[57vh] md:h-[60vh] lg:h-[90vh] object-fit"
                            />
                            {/* Content positioned absolutely over the image */}
                            <div className="absolute inset-0 bg-black/10 flex flex-col bg-black/40 items-start justify-center text-center z-10 p-4 lg:m-[100px]">
                                <p className="w-full md:w-[45vw] text-white font-bold text-[1.1rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[2.5rem] mb-4 leading-relaxed text-left">
                                    Explore the Possibilities of Development Connect with Quantum Shift Technologies
                                </p>
                                <p className="w-full md:w-[45vw] text-white/70 text-[0.9rem] sm:text-[1rem] md:text-[2rem] lg:text-[1rem] mb-4 leading-relaxed text-left">
                                    Quantum Shift Technologies specializes in MERN stack development and AI avatars for modern digital solutions.
                                </p>
                                <button href="#pricing" className="text-[0.875rem] sm:text-[1rem] p-2 sm:p-3 bg-red-600 rounded">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="h-[500px] flex items-center justify-center">Slide 3</SwiperSlide>
                    <SwiperSlide className="h-[500px] flex items-center justify-center">Slide 4</SwiperSlide> */}

                </Swiper>

                <div className="relative z-10 mt-20 lg:block text-black">
                    {/* <h5 className="tagline mb-6 text-center text-white/50">Quantum Brix Helping People Create Beautiful Website</h5> */}
                    <Marquee>
                        <div className="flex items-center justify-evenly gap-6">
                            <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                                <img src={reactlogo} width={100} height={20} alt="" />
                            </div>
                            <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                                <img src={nodelogo} width={134} height={28} alt="" />
                            </div>
                            <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                                <img src={mongodblogo} width={134} height={60} alt="" />
                                {/* Linux Website */}
                            </div>
                            <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                                <img src={awsLogo} width={134} height={40} alt="" />
                            </div>
                            <div className="flex items-center justify-center flex-[0_0_33.33%] h-[8.5rem]">
                                <img src={mysqlLogo} width={138} height={0} alt="" />
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
            <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" /> */}

        </Section>
    );
};

export default Hero;