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
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`}  onClick={() =>{
                             navigate("/")
                             window.scrollTo({ top: 0, behavior: "auto" });
                          }}>{navigation[0].title}</div>
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
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`} onClick={() => {
                            navigate('/portfolio')
                            window.scrollTo({ top: 0, behavior: "auto" });
                            }} >{navigation[1].title}</div>
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`} onClick={() => {
                            navigate('/about-us')
                            window.scrollTo({ top: 0, behavior: "auto" });
                            }}>{navigation[2].title}</div>
                        <div className={`${textColor} cursor-pointer border-b-2 border-transparent hover:border-red-500 transition-all duration-200 pb-1`} onClick={() => {
                            navigate('/career')
                            window.scrollTo({ top: 0, behavior: "auto" });
                            }}>{navigation[3].title}</div>


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

       {/* {isContactFormOpen && <ContactUs setIsContactFormOpen={setIsContactFormOpen}/>} */}
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
                                                        {/* {isContactFormOpen && <ContactUs  setIsContactFormOpen={setIsContactFormOpen}/>} */}

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