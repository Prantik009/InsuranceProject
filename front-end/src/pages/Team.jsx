import { Link } from "react-router-dom";
import {
  container,
  subcontainer_col,
  leadershipTeam,
  empployeeOfMonth,
} from "../assets/dummy";
import { Phone } from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeaderShipCard = ({
  Person_img,
  Person_name,
  Person_profile,
  Person__quote,
}) => {
  return (
    <>
      <div className="leadership-card rounded-4xl border border-pink py-6 px-6 flex flex-col items-center justify-center gap-3.5 md:w-4/5 h-[300px]">
        {Person_img && (
          <img
            src={Person_img}
            alt={Person_name}
            className="h-[100px] rounded-full bg-gray-200"
          />
        )}
        <h2
          className={`name text-stone-100 font-bold text-center ${
            Person_img ? "text-2xl" : "text-3xl w-[50%]  mt-12  "
          }`}
        >
          {Person_name}
        </h2>
        <p className="position rounded-full bg-pink/80 text-stone-100 text-sm tracking-tight capitalize px-3 py-1">
          {Person_profile}
        </p>
        <p className="quote text-sm text-stone-300 font-thin text-center">
          "{Person__quote}"
        </p>
      </div>
    </>
  );
};

const EmployeeCard = ({
  Person_img,
  Person_name,
  Person_contact,
  Person_Month,
  Person_role,
}) => {
  return (
    <>
      <div className=" mt-10 bg-[#44403b]/40 pt-10 pb-4 px-5 text-center text-white border-none border-pink rounded-2xl w-full relative backdrop-blur-lg shadow-lg">
        <p className="absolute border px-6 py-0.5 font-bold uppercase  text-center border-pink bg-gray-200 rounded-4xl text-pink w-[85%] md:w-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 -top-0.5 overflow-visible">Best Employee of the month</p>
        <div className="flex w-full justify-between border-none border-amber-100 flex-col md:flex-row gap-3">
          <div className="left w-full md:w-1/3 flex items-center mx-auto justify-center">
            <img src={Person_img} alt={Person_name} className=" w-[60%] md:w-[20vw] border-5 border-gray-200 bg-[#dbd2d3] rounded-full px-2 pt-2" />
          </div>
          <div className="right w-full md:w-2/3">
            <div className="flex flex-col items-center md:items-start">
              <p className="name text-3xl font-extrabold text-gray-100">{Person_name}</p>
              <p className="name text-xl font-bold text-gray-200">{Person_role}</p>
              <p className="name text-lg font-semibold text-gray-300 flex gap-2 items-center mt-1"><Phone size={20} />{Person_contact}</p>
              <p className="px-6 py-2 bg-pink text-white text-md font-bold rounded-full mt-2">{Person_Month}</p>
            </div>
          </div>
        </div>
        <p className="text-white mt-4 mb-0 text-lg font-bold"><span className="text-pink">Congratualations! 🎊</span> On your outstanding performance </p>
      </div>
    </>
  );
};

const Team = () => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var emp_settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={container}>
      <div className={subcontainer_col}>
        <div className="flex flex-col items-center text-start w-full">
          {/* page link  */}
          <p className="w-full md:!text-start uppercase text-xs font-semibold text-stone-300">
            <span className="text-pink">
              <Link to={"/"}>home</Link>
            </span>{" "}
            / team
          </p>

          {/* leadership section  */}
          <div className="w-full my-4 mx-auto">
            <h2 className=" text-4xl md:text-7xl w-full md:w-[50%]  text-stone-300">
              Meet our Team
            </h2>
            <p className="text-sm md:text-xl w-full md:w-[70%] text-stone-400 mt-4">
              Behind every trusted policy is a team that truly cares. Meet the
              visionaries driving TrueCoverSolutions with integrity, innovation,
              and a customer-first mindset.
            </p>

            {/* carousel section  */}
            <div className="carousel mt-5 border-none border-red-100 p-2">
              <Slider {...settings}>
                {leadershipTeam.map((person, index) => (
                  <LeaderShipCard
                    key={index}
                    Person_img={person.Person_img}
                    Person_name={person.Person_name}
                    Person_profile={person.Person_profile}
                    Person__quote={person.Person__quote}
                  />
                ))}
              </Slider>
            </div>
          </div>

          {/* employee section  */}
          <div className="w-full my-4 mx-auto">
            <h2 className=" text-4xl md:text-7xl w-full md:w-[70%]  text-stone-300">
              Employee of the Month
            </h2>
            <p className="text-sm md:text-xl w-full md:w-[70%] text-stone-400 mt-4">
              Celebrating excellence and dedication! Our Employee of the Month
              is recognized for going above and beyond to drive success, inspire
              teammates, and deliver exceptional service to our customers.
            </p>

            <div className="w-full flex justify-center">
              <div className="carousel mt-5 w-full max-w-lg px-2 text-white">
                <Slider {...emp_settings}>
                  {empployeeOfMonth.map((person, index) => (
                    <EmployeeCard
                      key={index}
                      Person_img={person.Person_img}
                      Person_name={person.Person_name}
                      Person_Month={person.Person_Month}
                      Person_contact={person.Person_cotact}
                      Person_role={person.Person_role}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
