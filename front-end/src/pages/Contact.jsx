import { container, subcontainer_col } from "../assets/dummy";
import cusSup from "../assets/cusotmerSupport.webp";

import { Mail, MapPin, PhoneCall, } from "lucide-react";

const sectionHeading =
  "w-full text-2xl lg:text-4xl font-bold text-center text-stone-200 mb-4";
const sectionContent =
  " w-full lg:w-[80%] text-center text-md lg:text-lg text-stone-400";

const sectionStyle =
  "w-full flex flex-col items-center justify-center mt-8 mb-8";

const Contact = () => {
  return (
    <div className={container}>
      <div className={subcontainer_col}>
        <div className={`connect-us ${sectionStyle}`}>
          <h2 className={sectionHeading}>
            <span className="text-pink">Connect</span> With Us
          </h2>
          <p className={`${sectionContent} capitalize`}>
            We are looking forword to hear from you
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-2 items-center justify-center ">
            {/* img section  */}
            <div className="img-section w-full md:w-1/2">
              <img src={cusSup} alt="" className=" w-full md:w-3/4" />
            </div>
            <div className="content-section w-full md:w-1/2 ">
              <ul className="w-full px-8 ">
                <li className="flex gap-3 items-center text-stone-300 mb-6 justify-center">
                  <MapPin className="text-pink mt-1 w-20 h-20 md:w-12 md:h-12"/>
                  <p>
                    <span className="font-bold">REGISTERED OFFICE:</span> A-372
                    Gali no-5 Mangal Bazar Road, 1st floor of Super Medicos
                    Opposite Deepkamal Book Depot Sangam vihar, New Delhi-110080
                  </p>
                </li>
                <li className="flex gap-3 items-center text-stone-300 mb-6">
                  <PhoneCall className="text-pink mt-1" size={20} />
                  <p>+91-11-88666688</p>
                </li>
                <li className="flex gap-3 items-center text-stone-300 mb-6">
                  <Mail className="text-pink mt-1" size={20} />
                  <p>trueCover@Solutions.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
