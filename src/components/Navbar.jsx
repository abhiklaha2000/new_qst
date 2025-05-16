import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { background, qstLogo, quantum2 } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import { RxDotFilled } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowRoundForward } from "react-icons/io";
import ContactUs from "./contactUs";





const navigation = [
    {
        id: "0",
        title: "Home",
        url: "/",
    },
    // {
    //     id: "1",
    //     title: "Services",
    //     url: "/",
    // },
    {
        id: "1",
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: "2",
        title: "About Us",
        url: "/about-us",
    },
    {
        id: "3",
        title: "Career",
        url: "/career",
    },
    {
        id: "5",
        title: "Contact Us",
        url: "#",
        onlyMobile: true,
    },
];

const Header = () => {
    const location = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    // const [hovered, setHovered] = useState(false);
    const [sideBar, setSideBar] = useState(false)
    const navigate = useNavigate()
    const [hovered, setHovered] = useState(false);
    const [hoveredSubMenu, setHoveredSubMenu] = useState(null); // Add this state
    const [scrolled, setScrolled] = useState(false);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    // const [isContactUsFormOpen, setIsContactUsFormOpen] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

     // Track scroll position
     useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

        // Determine text color based on the current route
        const isHomePage = location.pathname === "/";
        console.log("isHomePage", isHomePage);
        const textColor = isHomePage && !scrolled ? "text-white" : "text-black";

    return (
        <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 ${
            scrolled ? "bg-white shadow-lg" : "bg-white/0"
        }  lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8">
                    <img
                        src={qstLogo}
                        // width={190}
                        // height={40}
                        alt="OpenAI"
                        className="h-[80px] w-[120px]"
                    />
                </a>

                <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent lg:p-6 lg:text-white`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row gap-15 text-xl font-bold md:mx-auto xl:gap-15">
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`}  onClick={() => navigate("/")}>{navigation[0].title}</div>
                        {/*<Menu menuButton={<MenuButton className={`flex items-center gap-1 cursor-pointer hover:text-red-500 ${textColor}`}>{navigation[1].title}*/}
                        {/*    <IoMdArrowDropdown className={`${textColor} "text-lg"`} />*/}
                        {/*</MenuButton>} transition>*/}

                        {/*    <SubMenu label="SAP Solution Services" className="hover:text-red-500">*/}
                        {/*        <MenuItem className="hover:text-red-500">*/}
                        {/*            <Link to={"/services/sap-business"}>SAP Business One Implementation & Consulting</Link>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500">*/}
                        {/*            <Link to={"/services/sap-consulting"}>SAP Consulting</Link>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500">*/}
                        {/*            <Link to={"/services/sap-support"}>SAP Support</Link>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500">*/}
                        {/*            <Link to={"/services/sap-upgradation"}>SAP Upgradation</Link>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500">*/}
                        {/*            <Link to={"/services/sap-business-one-cloud"}>SAP Business One Cloud</Link>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500">*/}
                        {/*            <Link to={"/services/sap-hana-solution"}>SAP Business One HANA Solution</Link>*/}
                        {/*        </MenuItem>*/}
                        {/*    </SubMenu>*/}
                        {/*    <SubMenu label="Oracle Services" className="hover:text-red-500">*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>Installation & Configuration</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>Database Upgrades & Migrations</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>Performance Tuning</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>Backup & Recovery Solutions</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>High Availability & Disaster Recovery</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>Security & Compliance</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/oracle-service"}>Managed Services</Link></MenuItem>*/}
                        {/*    </SubMenu>*/}
                        {/*    <SubMenu label="OS Services" className="hover:text-red-500">*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>Installation & Configuration</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>System Hardening & Security</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>Patch Management & Updates</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>Performance Monitoring & Optimization</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>User & Permission Management</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>Backup & Recovery Planning</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>OS Migration & Upgrades</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/os-service"}>Remote & On-Site Support</Link></MenuItem>*/}
                        {/*    </SubMenu>*/}
                        {/*    <SubMenu label="AWS Cloud Services" className="hover:text-red-500">*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/aws-service"}>AWS Deployment & Management</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/aws-service"}>AWS Security</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/aws-service"}>AWS Cost Optimization</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/aws-service"}>AWS Managed Services</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/aws-service"}>AWS Support</Link></MenuItem>*/}
                        {/*        <MenuItem className="hover:text-red-500"><Link to={"/services/aws-service"}>AWS Migration</Link></MenuItem>*/}
                        {/*    </SubMenu>*/}
                        {/*</Menu>*/}
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`} onClick={() => navigate('/portfolio')}>{navigation[2].title}</div>
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`} onClick={() => navigate('/about-us')}>{navigation[3].title}</div>
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`} onClick={() => navigate('/career')}>{navigation[4].title}</div>


                    </div>

                    <div className="absolute inset-0 pointer-events-none lg:hidden">
                        <div className="absolute inset-0 opacity-[.03]">
                            <img className="w-full h-full object-cover" src={background} width={688} height={953} alt="" />
                        </div>

                        <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        </div>

                        <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
                        <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>

                        <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
                        <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
                    </div>
                </nav>

                <ContactUs
                    isContactFormOpen={isContactFormOpen}
                    setIsContactFormOpen={setIsContactFormOpen}
                />

                {/*<Button className="hidden lg:flex !text-[15px]" onClick={() => setIsContactFormOpen(true)}>*/}
                {/*    Contact Us*/}
                {/*</Button>*/}

                {/*console.log("isContactFormOpen-----", isContactFormOpen)*/}
                {/*/!* Contact Form Modal *!/*/}
                {/*{isContactFormOpen && (*/}
                {/*    <div className="fixed w-[600px] h-[530px] ml-[350px] mt-[630px] bg-opacity-50 flex items-center justify-center">*/}
                {/*        <div className="bg-yellow-400 rounded-lg p-8 max-w-md w-full h-[550px] m-4">*/}
                {/*            /!* Modal Header *!/*/}
                {/*            <div className="flex justify-between items-center mb-6">*/}
                {/*                <h2 className="text-2xl font-medium font-roboto text-black text-center ml-32 ">Contact Us</h2>*/}
                {/*                <button*/}
                {/*                    onClick={() => setIsContactFormOpen(false)}*/}
                {/*                    className="text-gray-500 hover:text-gray-900 text-xl"*/}
                {/*                >*/}
                {/*                    ✕*/}
                {/*                </button>*/}
                {/*            </div>*/}

                {/*            /!* Contact Form *!/*/}
                {/*            <form onSubmit={(e) => {*/}
                {/*                e.preventDefault();*/}
                {/*                // Handle form submission here*/}
                {/*                setIsContactFormOpen(false);*/}
                {/*            }}>*/}
                {/*                <div className="space-y-4">*/}
                {/*                    /!* Name Field *!/*/}
                {/*                    <div>*/}
                {/*                        <label*/}
                {/*                            htmlFor="name"*/}
                {/*                            className="block text-sm font-bold text-gray-700 mb-1 "*/}
                {/*                        >*/}
                {/*                            Name*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            id="name"*/}
                {/*                            name="name"*/}
                {/*                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"*/}
                {/*                            required*/}
                {/*                        />*/}
                {/*                    </div>*/}

                {/*                    /!* Email Field *!/*/}
                {/*                    <div>*/}
                {/*                        <label*/}
                {/*                            htmlFor="email"*/}
                {/*                            className="block text-sm font-bold text-gray-700 mb-1 "*/}
                {/*                        >*/}
                {/*                            Email*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="email"*/}
                {/*                            id="email"*/}
                {/*                            name="email"*/}
                {/*                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"*/}
                {/*                            required*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    /!* Phone Field *!/*/}
                {/*                    <div>*/}
                {/*                        <label*/}
                {/*                            htmlFor="phone"*/}
                {/*                            className="block text-sm font-bold text-gray-700 mb-1 "*/}
                {/*                        >*/}
                {/*                            Phone*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            id="phone"*/}
                {/*                            name="phone"*/}
                {/*                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"*/}
                {/*                            required*/}
                {/*                        />*/}
                {/*                    </div>*/}

                {/*                    /!* Message Field *!/*/}
                {/*                    <div>*/}
                {/*                        <label*/}
                {/*                            htmlFor="message"*/}
                {/*                            className="block text-sm font-bold text-gray-700 mb-1"*/}
                {/*                        >*/}
                {/*                            Message*/}
                {/*                        </label>*/}
                {/*                        <textarea*/}
                {/*                            id="message"*/}
                {/*                            name="message"*/}
                {/*                            rows="4"*/}
                {/*                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"*/}
                {/*                            required*/}
                {/*                        ></textarea>*/}
                {/*                    </div>*/}

                {/*                    /!* Submit Button *!/*/}
                {/*                    <button*/}
                {/*                        type="submit"*/}
                {/*                        className="w-full bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"*/}
                {/*                    >*/}
                {/*                        Send Message*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </form>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}




                {/*This is for the side bar*/}
                {sideBar &&

                    <div className="fixed top-0 left-0  z-999 lg:hidden h-[100vh] w-[100vw] bg-gray-900/50 backdrop-blur-sm">


                        <div className="bg-[#dbd9d9] h-[100vh] w-[70vw] ">

                                <div className="flex justify-between items-center w-[100%] p-4 border-b-[#000000] border-[2px]">
                                    <a className="block w-[12rem] xl:mr-8" href="#hero">
                                        <img
                                            src={quantum2}
                                            // width={190}
                                            // height={40}
                                            alt="OpenAI"
                                            className="h-[40px] w-[100px]"
                                        />
                                    </a>
                                    <RxCross2 size={30} color="black" onClick={() => setSideBar(false)} />
                                </div>

                                {/* Code here abhik */}
                                <div className="flex flex-col overflow-y-auto h-[100vh]">
                                    <ul className="p-4">
                                        {navigation.map((item) => (
                                            <li key={item.id} className={`py-2 ${item.title !== "Services" && "border-b border-gray-400"}`}>
                                                {/* {item.title === "Services" ? (
                                                    <div>
                                                        <button
                                                            className="text-black hover:text-blue-500 transition-colors
                                                             w-full text-left border-b !border-gray-400 py-2 flex items-center gap-2 text-[1.6rem]"
                                                            onClick={() => setHovered((prev) => !prev)}
                                                        >
                                                            {item.title} {hovered ? <MdArrowDropDown size={25}/> : <MdArrowDropDown className="rotate-180" size={25}/>}
                                                        </button>
                                                        {hovered && (
                                                            <ul className="pl-4 mt-2">
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.3rem]"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "SAP" ? null : "SAP"
                                                                            )
                                                                        }
                                                                    >
                                                                        SAP Solution Services  {hoveredSubMenu === "SAP" ? <MdArrowDropDown size={25}/> : <MdArrowDropDown className="rotate-180" size={25}/>}
                                                                    </button>
                                                                    {hoveredSubMenu === "SAP" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-business"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Business One Implementation & Consulting <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-consulting"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Consulting <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-support"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Support <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-upgradation"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Upgradation <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-business-one-cloud"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    SAP Business One Cloud <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/sap-hana-solution"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                   SAP Business One HANA Solution <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.3rem]"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "Oracle" ? null : "Oracle"
                                                                            )
                                                                        }
                                                                    >
                                                                        Oracle Services {hoveredSubMenu === "Oracle" ? <MdArrowDropDown size={25}/> : <MdArrowDropDown className="rotate-180" size={25}/>}
                                                                    </button>
                                                                    {hoveredSubMenu === "Oracle" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Installation & Configuration <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Database Upgrades & Migrations <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Performance Tuning <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Backup & Recovery Solutions <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    High Availability & Disaster Recovery <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                   Security & Compliance <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/oracle-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Managed Services <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.3rem]"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "OS" ? null : "OS"
                                                                            )
                                                                        }
                                                                    >
                                                                        OS Services {hoveredSubMenu === "OS" ? <MdArrowDropDown size={25}/> : <MdArrowDropDown className="rotate-180" size={25}/>}
                                                                    </button>
                                                                    {hoveredSubMenu === "OS" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Installation & Configuration <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    System Hardening & Security <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Patch Management & Updates <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Performance Monitoring & Optimization <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    User & Permission Management <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Backup & Recovery Planning <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    OS Migration & Upgrades <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/os-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    Remote & On-Site Support <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                                <li>
                                                                    <button
                                                                        className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.3rem]"
                                                                        onClick={() =>
                                                                            setHoveredSubMenu((prev) =>
                                                                                prev === "AWS" ? null : "AWS"
                                                                            )
                                                                        }
                                                                    >
                                                                        AWS Cloud Services {hoveredSubMenu === "AWS" ? <MdArrowDropDown size={25}/> : <MdArrowDropDown className="rotate-180" size={25}/>}
                                                                    </button>
                                                                    {hoveredSubMenu === "AWS" && (
                                                                        <ul className="pl-4 mt-2">
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Deployment & Management  <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Security  <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Cost Optimization  <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Managed Services  <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Support  <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to={"/services/aws-service"}
                                                                                    className="text-black hover:text-blue-500 transition-colors w-full text-left border-b !border-gray-400 py-2 flex items-center justify-between text-[1.1rem]"
                                                                                    onClick={() => setSideBar(false)}
                                                                                >
                                                                                    AWS Migration  <IoMdArrowRoundForward/>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : ( */}
                                                    <Link
                                                        to={item.url}
                                                        className="text-black hover:text-blue-500 transition-colors !border-gray-400 py-2 flex items-center gap-2 text-[1.6rem]"
                                                        onClick={() => {
                                                            setSideBar(false);  // Close sidebar
                                                            if (item.title === "Contact Us") {
                                                                setIsContactFormOpen(true)
                                                            }
                                                        }}
                                                    >
                                                        {item.title} <IoMdArrowRoundForward/>
                                                        <ContactUs isContactFormOpen={isContactFormOpen} setIsContactFormOpen={setIsContactFormOpen}/>

                                                    </Link>

                                                {/* )} */}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                        </div>

                    </div>
                }
                <Button className="ml-auto lg:hidden" onClick={() => setSideBar(!sideBar)}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;