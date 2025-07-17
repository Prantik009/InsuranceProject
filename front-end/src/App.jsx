import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Claims from "./pages/Calims";
import UnderService from "./pages/UnderService";
import Team from "./pages/Team";
import Details from "./pages/Details";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import icon from "./assets/icon.webp";

import lifeIl from "./assets/pageImages/termlife.webp";
import bikeIl from "./assets/pageImages/biike.webp";
import carIl from "./assets/pageImages/car.webp";
import healthIl from "./assets/pageImages/health.webp";

import HealthForm from "./components/HealthForm";
import { doData, doData_Car } from "./assets/dummy";
import MotoForm from "./components/MotoForm";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/claims" element={<Claims />} />
            <Route
              path="/car"
              element={
                <Details
                  sec_img={carIl}
                  sec_form={(props) => <MotoForm formType="car" {...props} />} // ✅ pass formType
                  sec_data={doData_Car}
                  sec_type={"car"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <Details
                  sec_img={healthIl}
                  sec_form={(props) => <HealthForm type="health" {...props} />}
                  sec_data={doData}
                  sec_type={"Health"}
                />
              }
            />
            <Route
              path="/life"
              element={
                <Details
                  sec_img={lifeIl}
                  sec_form={(props) => <HealthForm type="life" {...props} />}
                  sec_data={doData}
                  sec_type={"TermLife"}
                />
              }
            />
            <Route
              path="/bike"
              element={
                <Details
                  sec_img={bikeIl}
                  sec_form={(props) => <MotoForm formType="bike" {...props} />} // ✅ pass formType
                  sec_data={doData_Car}
                  sec_type={"Bike"}
                />
              }
            />

            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            {/* Catch-all route */}
            <Route path="*" element={<UnderService />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <div>
        <FloatingWhatsApp
          phoneNumber="+919717520476"
          accountName="True Cover Solutions"
          statusMessage="PROTECT WHAT MATTERS MOST."
          chatMessage="Welcome to True Cover Solutions, How may I assist you?"
          placeholder="Start Chat"
          darkMode="true"
          avatar={icon}
        />
      </div>
    </div>
  );
};

export default App;
