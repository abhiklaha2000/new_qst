import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";







const Footer = () => {
     // State for hover effect on each link
   const [hoveredLink, setHoveredLink] = useState(null);
   const navigate = useNavigate()


    return (
      <footer className="bg-gray-900 text-gray-200">
        {/* Top Info Box */}
        <div className="w-full bg-gray-800 py-6 md:py-[50px] pl-[30px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <a href="https://sktthemesdemo.net/startup/">
              <img
                className="h-12"
                src="https://sktthemesdemo.net/startup/wp-content/themes/skt-startup-pro/images/logo.png"
                alt="Startup WordPress Theme"
              />
            </a>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex justify-center items-center space-x-3">  
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-500 hover:text-blue-700 text-3xl"
                  title="facebook"
                >
                  <FaFacebook className="text-white"/>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-xl"
                  title="twitter"
                >
                  <AiFillTwitterCircle className="text-white text-[33px] ml-2" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 text-xl]"
                  title="linkedin"
                >
                    <TiSocialLinkedinCircular className="text-white text-[38px] ml-[3px]"/>
                </a>
                    {/* <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 text-xl"
                    title="pinterest"
                    >
                    <i className="fa fa-pinterest"></i>
                    </a>
                    <a
                    href="https://www.skype.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 text-xl"
                    title="skype"
                    >
                    <i className="fa fa-skype"></i>
                    </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="max-w-7xl mx-auto  px-4 py-12 grid grid-cols-1 md:grid-rows gap-8 md:pl-[40px] lg:grid-cols-3 ">
          {/* About Us */}
          <div>
            <h3 className="text-3xl font-bold mb-4">About Us</h3>
            <div className="w-14 h-[3px] mb-7" style={{ backgroundColor: "rgb(244, 30, 126)" }}></div>
            <p className="mb-2" style={{ color: "rgb(190, 190, 190)" }}>
                Quantum Shift Technologies, founded in 2022 by a team with over 12 years of IT experience, delivers modern, tailored solutions that drive business growth and transformation. Our expertise includes building scalable web applications with the MERN stack, deploying secure and reliable solutions on AWS, and creating intelligent AI avatars that enhance user engagement. With a certified and versatile team, we combine technical excellence with a collaborative approach to help organizations innovate, streamline operations, and achieve lasting success in the digital era.
            </p>
          </div>
          {/* Our Quick Link */}
          <div className="lg:pl-10 xl:pl-20" >
            <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
            <div className="w-14 h-[3px] mb-7" style={{ backgroundColor: "rgb(244, 30, 126)" }}></div>

            <ul className="space-y-2 mt-7">
              <li className="flex items-center space-x-2 cursor-pointer ">
                <MdArrowForwardIos className="text-white"/>
                <a style={{
                color: hoveredLink === 0 ? "rgb(244, 30, 126)" : "rgb(190, 190, 190)",
                transition: "color 0.2s"
              }}
              onMouseEnter={() => setHoveredLink(0)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() =>{
                             navigate("/")
                             window.scrollTo({ top: 0, behavior: "auto" });
                          }}
              >Home</a>
              </li>
              <li className="flex items-center space-x-2 cursor-pointer ">
                <MdArrowForwardIos className="text-white"/>
                <a style={{
                color: hoveredLink === 1 ? "rgb(244, 30, 126)" : "rgb(190, 190, 190)",
                transition: "color 0.2s"
              }}
              onMouseEnter={() => setHoveredLink(1)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() =>{
                             navigate("/portfolio")
                             window.scrollTo({ top: 0, behavior: "auto" });
                          }}
                >Portfolio</a>
              
              </li>
              <li className="flex items-center space-x-2 cursor-pointer ">
                <MdArrowForwardIos className="text-white"/>
                <a style={{
                color: hoveredLink === 3 ? "rgb(244, 30, 126)" : "rgb(190, 190, 190)",
                transition: "color 0.2s"
              }}
              onMouseEnter={() => setHoveredLink(3)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() =>{
                             navigate("/about-us")
                             window.scrollTo({ top: 0, behavior: "auto" });
                          }}
              >About Us</a>
              
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Contact Info</h3>
            <div className="w-14 h-[3px] mb-7" style={{ backgroundColor: "rgb(244, 30, 126)" }}></div>
            <div>
                <p className="mb-2" style={{ color: "rgb(190, 190, 190)"}}>
                  <span className="inline-block"  >Phone:</span> +91 9836445738
                </p>
                <p className="mb-2" style={{ color: "rgb(190, 190, 190)" }}>
                  <span className="inline-block" >E-mail:</span> support@quantumshifttechnologies.com
                </p>
            </div>
          
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-800 py-4 md:py-8 md:pl-[25px]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm" style={{ color: "rgb(190, 190, 190)" }}>
            <div className="mb-2 md:mb-0">© 2025 Quantumshift Technologies. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;