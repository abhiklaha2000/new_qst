import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { qstLogo } from "../assets";
import ContactUs from "./contactUs";
import Button from "./Button";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (to) => {
    setMenuOpen(false);   // <-- Close the menu immediately
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(to);
    }, 2000); // 3 seconds
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-900 shadow-md h-[100px] xl:h-[120px] z-50 relative">
      {/* Loading Spinner */}
      {loading ? (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
          <img
            src={qstLogo}
            alt="Quantum Shift Technologies Logo"
            className="h-[200px] w-[200px] animate-pulse"
          />
       </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between pt-3 md:pt-1 md:flex md:justify-between lg:pt-0 ">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="#" title="Banking Sector">
                <img
                  src={qstLogo}
                  alt="Banking Sector"
                  className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex md:space-x-8 md:items-center md:text-xl md:font-medium md:text-white lg:space-x-14 xl:space-x-24">
              <li>
                <button
                  className="cursor-pointer border-b-2 border-transparent hover:border-pink-500 transition-all duration-200 pb-1 bg-transparent"
                  onClick={() => handleNavClick("/")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer border-b-2 border-transparent hover:border-pink-500 transition-all duration-200 pb-1 bg-transparent"
                  onClick={() => handleNavClick("/portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer border-b-2 border-transparent hover:border-pink-500 transition-all duration-200 pb-1 bg-transparent"
                  onClick={() => handleNavClick("/about-us")}
                >
                  About Us
                </button>
              </li>
            </ul>

             <button href="#pricing" className="text-[0.875rem] sm:text-[1rem] p-2 sm:p-3 bg-red-600 rounded hidden md:block" onClick={() => setIsContactFormOpen(true)}>
                Contact Us
            </button> 

     {isContactFormOpen && <ContactUs setIsContactFormOpen={setIsContactFormOpen}/>}

            {/* Mobile menu button */}
            <button
              style={{ position: "relative", zIndex: 10000 }}
              className={`${menuOpen ? "hidden" : ""} md:hidden text-2xl `}
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </button>
          </div>

          {/* Mobile Menu */}
         <div
            style={{ zIndex: 9999 }}
            className={`
              fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-end
              transition-opacity duration-300
              ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
            onClick={toggleMobileMenu}
          >
            <div
              className={`
                w-4/5 max-w-xs h-full bg-gray-900 px-4 pb-4 pt-8 shadow-lg
                absolute right-0 top-0
                transition-transform duration-500 ease-in-out
                ${menuOpen ? "translate-x-0" : "translate-x-full"}
              `}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={toggleMobileMenu}
              >
                &times;
              </button>
              <ul className="space-y-4 text-lg text-blue-500 font-medium mt-8">
                <li>
                  <button className="w-full text-left" onClick={() => handleNavClick("/")}>
                    Home
                  </button>
                </li>
                <li>
                  <button className="w-full text-left" onClick={() => handleNavClick("/portfolio")}>
                    Portfolio
                  </button>
                </li>
                <li>
                  <button className="w-full text-left" onClick={() => handleNavClick("/about-us")}>
                    About Us
                  </button>
                </li>
                <li>
                  <button className="w-full text-left" onClick={() => {
                    setIsContactFormOpen(true)
                    setMenuOpen(false)
                  }}>
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewNavbar;