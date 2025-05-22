import React, { useState ,useEffect} from "react";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom"; // or use <a> if not using React Router
import { qstLogo } from "../assets";
import ContactUs from "./contactUs";
import Button from "./Button";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
      console.log("Sidebar toggle clicked. Current state:", menuOpen);

    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-900 shadow-md h-[100px] xl:h-[120px] z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between pt-3 md:pt-1  md:flex md:justify-between lg:pt-0 ">
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
            <Link className="cursor-pointer border-b-2 border-transparent hover:border-pink-500 transition-all duration-200 pb-1" to="/">Home</Link>
          </li>
          <li>
            <Link className="cursor-pointer border-b-2 border-transparent hover:border-pink-500 transition-all duration-200 pb-1" to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link className="cursor-pointer border-b-2 border-transparent hover:border-pink-500 transition-all duration-200 pb-1" to="/about-us">About Us</Link>
          </li>
        </ul>
        {/* CTA */}

        {/* <button className="hidden md:block md:bg-blue-500 md:text-white md:rounded-md md:hover:text-white-500 md:transition md:duration-300 h-[40px] w-[120px] md:cursor-pointer ">
          CONTACT US
        </button> */}

        
        <ContactUs
            isContactFormOpen={isContactFormOpen}
            setIsContactFormOpen={setIsContactFormOpen}
        />


        {/* Mobile menu button */}
        <button style={{ position: "relative", zIndex: 10000 }} className={`${menuOpen ? "hidden" : ""} md:hidden text-2xl`} onClick={toggleMobileMenu}>
          <FaBars />
        </button>
      </div>
      {console.log("menuOpen====", menuOpen)}




      {/* Mobile Menu */}
     {menuOpen && (
        <div
        style={{ zIndex: 9999 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-end transition-all duration-700"
          onClick={toggleMobileMenu}
        >
          <div
            className="w-4/5 max-w-xs h-full bg-gray-900 px-4 pb-4 pt-8 shadow-lg transform transition-transform duration-700 translate-x-0"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleMobileMenu}
            >
              &times;
            </button>
            <ul className="space-y-4 text-lg text-blue-500 font-medium mt-8">
              <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li><Link to="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link></li>
              <li><Link to="/about-us" onClick={toggleMobileMenu}>About Us</Link></li>
              <li>
                <Link className="" onClick={() => setIsContactFormOpen(true)}>
                  Contact Us
                  <ContactUs
                      isContactFormOpen={isContactFormOpen}
                      setIsContactFormOpen={setIsContactFormOpen}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
   </div>
  );
}

 
export default NewNavbar;