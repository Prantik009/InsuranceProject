import { Link } from "react-router-dom";
import { container, subcontainer_col, leadershipTeam, empployeeOfMonth } from "../assets/dummy";

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
        {Person_img && <img src={Person_img} alt={Person_name} className="h-[100px] rounded-full bg-gray-200" />}
        <h2 className={`name text-stone-100 font-bold text-center ${Person_img ? 'text-2xl' : 'text-3xl w-[50%]  mt-12  '}`}>
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
  Person_Month,
}) => {
  return (
    <>
      <div className="employee-card rounded-3xl border border-slate-100 py-6 px-8 flex flex-col items-center justify-center gap-3.5 md:w-[62%] h-[350px] max-h-[350px] bg-slate-700 shadow-slate-500 shadow-lg/20">
        <img src={Person_img} alt={Person_name} className="h-[120px] rounded-full object-contain border-4 border-slate-200" />
        <h2 className="name text-stone-100 text-xl font-bold">
          {Person_name}
        </h2>
        <p className="position rounded-full bg-purple-500 text-stone-100 text-sm tracking-tight capitalize px-5 py-2">
          {Person_Month}
        </p>
        <p className="quote text-md text-stone-200 text-center font-semibold w-full">
          <span className="text-pink">Congratulations</span> 🎉 on your outstanding performance!
        </p>
      </div>
    </>
  );
};

const Team = () => {
  var settings = {
    dots: false,
    infinite: true,
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

  return (
    <div className={container}>
      <div className={subcontainer_col}>
        <div className="flex flex-col items-center text-center md:text-start w-full">
          {/* page link  */}
          <p className="w-full md:!text-start uppercase text-xs font-semibold text-stone-300">
            <span className="text-pink">
              <Link to={"/"}>home</Link>
            </span>{" "}
            / team
          </p>

          {/* leadership section  */}
          <div className="w-full mt-4 mb-4">
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
          <div className="w-full mt-4">
            <h2 className=" text-4xl md:text-7xl w-full md:w-[70%]  text-stone-300">
              Employee of the Month
            </h2>
            <p className="text-sm md:text-xl w-full md:w-[70%] text-stone-400 mt-4">
              Celebrating excellence and dedication! Our Employee of the Month is recognized for going above and beyond to drive success, inspire teammates, and deliver exceptional service to our customers.
            </p>

            {/* carousel section  */}
            <div className="carousel mt-5 border-none border-stone-100 p-2">
              <Slider {...emp_settings}>
                {empployeeOfMonth.map((person, index) => (
                  <EmployeeCard
                    key={index}
                    Person_img={person.Person_img}
                    Person_name={person.Person_name}
                    Person_Month={person.Person_Month}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
