
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import SapBusiness from "./pages/SAPPages/SapBusiness";
import SapConsulting from "./pages/SAPPages/SapConsulting";
import SapSupport from "./pages/SAPPages/SapSupport";
import SapUpgradation from "./pages/SAPPages/SapUpgradation";
import SapBusinessOneCloud from "./pages/SAPPages/SapBusinessOneCloud";
import SapHanaSolution from "./pages/SAPPages/SapHanaSolution";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import OsService from './pages/OsServicePages/OsService';
import OracleServices from './pages/OraclePages/OracleService';
import AWSService from './pages/AWSPages/AWSService';
import NewNavbar from './components/NewNavbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);

  return (
    <Router>
            <div className="overflow-hidden">
              <NewNavbar />
                {/* <Navbar /> */}
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/career" element={<Career />} />

                  
                    <Route path="/services/sap-business" element={<SapBusiness />} />
                    <Route path="/services/sap-consulting" element={<SapConsulting />} />
                    <Route path="/services/sap-support" element={<SapSupport />} />
                    <Route path="/services/sap-upgradation" element={<SapUpgradation />} />
                    <Route path="/services/sap-business-one-cloud" element={<SapBusinessOneCloud />} />
                    <Route path="/services/sap-hana-solution" element={<SapHanaSolution />} />


                    <Route path="/services/oracle-service" element={<OracleServices />} />

                    <Route path="/services/os-service" element={<OsService />} />


                    <Route path="/services/aws-service" element={<AWSService />} />
                </Routes>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
