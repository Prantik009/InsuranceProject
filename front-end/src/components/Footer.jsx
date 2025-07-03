import { container, subcontainer } from "../assets/dummy";
import { Link } from "react-router-dom";
// social
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";

// extra pages for  future 
// {name:"Privacy Policy", link:"about"},{name:"Term to Use", link:"about"},{name:"Grievance", link:"about"}

const socialLinks = [
  {
    id: 1,
    icon: <IoLogoInstagram className="h-[18px] md:h-[25px] w-[18px] md:w-[25px]" />,
    link: "https://www.instagram.com/true_cover_solutions?igsh=MXN1dnBxdzRpdnhwNQ==",
  },
  {
    id: 2,
    icon: <BiLogoLinkedin className="h-[18px] md:h-[25px] w-[18px] md:w-[25px]" />,
    link: "",
  },
  {
    id: 4,
    icon: <FaYoutube className="h-[18px] md:h-[25px] w-[18px] md:w-[25px]" />,
    link: "",
  },
  {
    id: 5,
    icon: <BiLogoTelegram className="h-[18px] md:h-[25px] w-[18px] md:w-[25px]" />,
    link: "",
  },
];
const otherlinks = [{name:"Contact us", link:"contact"},{name:"Team", link:"team"}, {name:"About us", link:"about"}];
const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={container}>
      <div className={subcontainer}>
        <div className="flex items-center justify-center flex-col border-t border-stone-600">
          <div className="border-none border-stone-400 w-full md:w-[80%] text-center flex gap-2 flex-col py-4 items-center justify-center">
            <h2 className="company-name text-stone-100 font-bold text-sm md:text-lg mt-4 md:mt-0">
              True Cover Solutions General Insurance Company.
            </h2>
            <h4 className="md:text-sm text-stone-300 text-light text-xs w-[90%]">
              A-372 Gali no-5 Mangal Bazar Road, 1st floor of Super Medicos
              Opposite Deepkamal Book Depot Sangam vihar, New Delhi-110080
            </h4>
            <p className="info text-xs md:text-sm font-thin text-stone-500">
              License Category: Direct Broker (Life & General) | IRDAI Reg. No.:{" "}
              <span className="font-semibold">[not disclose yet]</span> | CIN:{" "}
              <span className="font-semibold">U...[not disclose yet]</span>
            </p>

            <p className="content text-thin text-[12px] text-stone-500 w-full lg:w-[60%]">
              Insurance is the subject matter of solicitation.Users are advised to read all
              policy-related documents carefully before making any purchase
              decision. For grievances or support, please refer to our Grievance
              Redressal Policy or contact our support team at
              multiple.insurance.assoc@gmail.com
            </p>

            <ul className="flex gap-4 items-center justify-center mt-4">
              {socialLinks.map(({ link, id, icon }) => (
                <li
                  key={id}
                  className="text-stone-900 bg-stone-400 rounded-full md:rounded-lg p-2 hover:bg-pink hover:text-stone-200 transition ease delay-10"
                >
                  <Link to={link}>{icon}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full justify-between items-center mt-4 flex-col-reverse lg:flex-row gap-8 lg:gap-0">
            <p className="copyRight font-thin text-[12px] text-stone-300">
              Copyright's {currYear}{" "}
              <span className="font-semibold ">
                TRUE COVER SOLUTIONS | Maintained By Nitish Mondal & Prantik Biswas.
              </span>
            </p>
            <div className="otherlinks">
              <ul className="flex gap-4 items-center justify-center">
                {otherlinks.map(({name, link}) => (
                  <li
                    key={name}
                    className="md:text-[12px] font-thin text-stone-300 hover:text-stone-100 transition hover:scale-102 ease-in-out delay-100 text-[10px]"
                  >
                    <Link to={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
