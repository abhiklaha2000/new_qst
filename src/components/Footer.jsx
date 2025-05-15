import React from "react";
import Section from "./Section";
import { discordBlack, facebook, instagram, telegram, twitter } from "../assets";
import { FaFacebook, FaGripLinesVertical, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import {qstLogo} from "../assets";
import { Link, useNavigate } from "react-router-dom";


const socials = [
    {
        title: "Discord",
        iconUrl: discordBlack,
        url: "#",
    },
    {
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

const Footer = () => {
    const navigate = useNavigate();
    return (
      <div className="bg-black text-white font-sans">
        <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-10 py-10 gap-10">
          {/* First Footer Element */}
          <div className="flex-1 lg:flex-[1.5]">
            <div className="flex items-center gap-4">
              <img src={qstLogo} className="h-16 w-24" alt="Logo" />
              {/* <img src={quantum2} className="h-20 w-48" alt="Company Name" /> */}
            </div>
            <div className="mt-5 pr-5">
                We specialize in MERN stack development and AI avatars.<br />
    Empowering businesses with modern web solutions and intelligent digital experiences.
            </div>
            <div className="flex gap-6 mt-5">
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center">
                <FaFacebook />
              </div>
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center">
                <FiInstagram />
              </div>
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center">
                <FaXTwitter />
              </div>
              <div className="bg-gray-800 h-12 w-12 rounded-full flex items-center justify-center">
                <FaLinkedin />
              </div>
            </div>
          </div>
  
          {/* Useful Links */}
          <div className="flex-1">
            <div className="text-lg font-semibold">Useful Links</div>
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight /><Link to={"/about-us"}>About us</Link>
              </div>
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight /><Link to={"/portfolio"}>Our Portfolio</Link>
              </div>
              <div className="flex items-center gap-2">
                <FaLongArrowAltRight /><Link to={"/career"}>Career</Link>
              </div>
              {/* <div className="flex items-center gap-2">
                <FaLongArrowAltRight /> Contact Us
              </div> */}
            </div>
          </div>
  
          {/* Contact Us */}
          <div className="flex-1">
            <div className="text-lg font-semibold">Contact Us</div>
            <div className="flex flex-col gap-4 mt-5">
              <div>support@quantumshifttechnologies.com</div>
              <div>9836445738</div>
            </div>
          </div>
  
          {/* Newsletter */}
          <div className="flex-1 lg:flex-[1.5]">
            <div className="text-lg font-semibold">Contact Us</div>
            <div className="mt-5">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Email address"
                  className="h-12 w-2/3 lg:w-3/4 px-4 text-black"
                />
                <button className="h-12 w-1/3 lg:w-1/4 bg-red-600 text-white">
                  Sign up
                </button>
              </div>
              <div className="mt-3 text-gray-400">
                On Subscribing you can stay updated with our latest offers and discounts.
              </div>
            </div>
          </div>
        </div>
  
        {/* Extreme Footer */}
        <div className="border-t border-gray-600 px-5 lg:px-10 py-5 flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="text-sm text-center lg:text-left">
            © 2025 Quantumshift Technologies. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <div
              className="cursor-pointer"
              onClick={() => navigate("/privacy-policy")}
            >
              Privacy Policy
            </div>
            <div className="text-gray-400">
              <FaGripLinesVertical />
            </div>
            <div>Terms of Services</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;

