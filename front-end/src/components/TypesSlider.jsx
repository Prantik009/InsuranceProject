import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { bike, dog, car, life, homeIsurance, doctor } from "../assets/dummy";
// THIS IS FOR MOBILE
const TypesSlider = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState("car Insurance");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount just in case
    };
  }, [showModal]);

  const getQuoteRoute = useCallback((name) => {
    const routeMap = {
      "car Insurance": "/car",
      "bike Insurance": "/bike",
      "Health Insurance": "/health",
      "term life Insurance": "/life",
      "Fire Insurance": "/fire",
      "Pet Insurance": "/pet",
    };
    return routeMap[name] || "/";
  }, []);

  // ✅ useCallback to avoid recreating functions
  const handleNavigate = useCallback((path) => navigate(path), [navigate]);
  const toggleModal = useCallback(() => setShowModal((prev) => !prev), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  // ✅ useMemo to avoid regenerating data
  const InsuranceTypes = useMemo(
    () => [
      { name: "car Insurance", img: car },
      { name: "bike Insurance", img: bike },
      {
        name: "Health Insurance",
        img: doctor,
        handleClick: () => handleNavigate("/health"),
      },
      {
        name: "term life Insurance",
        img: life,
        handleClick: () => handleNavigate("/life"),
      },
      { name: "View All", handleClick: toggleModal },
    ],
    [handleNavigate, toggleModal]
  );

  const ModalData = useMemo(
    () => [
      {
        name: "car Insurance",
        img: car,
        handleClick: () => handleNavigate("/car"),
      },
      {
        name: "bike Insurance",
        img: bike,
        handleClick: () => handleNavigate("/bike"), // ✅ FIXED
      },
      {
        name: "Health Insurance",
        img: doctor,
        handleClick: () => handleNavigate("/health"),
      },
      {
        name: "term life Insurance",
        img: life,
        handleClick: () => handleNavigate("/life"),
      },
      {
        name: "Fire Insurance",
        img: homeIsurance,
        handleClick: () => handleNavigate("/fire"), // ✅ FIXED
      },
      {
        name: "Pet Insurance",
        img: dog,
        handleClick: () => handleNavigate("/pet"), // ✅ FIXED
      },
    ],
    [handleNavigate]
  );

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.7,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-screen sm:w-[80vw] px-4">
      <Slider {...settings}>
        {InsuranceTypes.map((type) => (
          <div key={type.name} className="max-w-[300px]">
            <div
              onClick={() => {
                if (type.handleClick) {
                  type.handleClick();
                } else {
                  setSelectedId(type.name);
                  navigate(getQuoteRoute(type.name));
                }
              }}
              className={`h-[85px] w-[80px] border flex flex-col items-center rounded-lg justify-center py-2 text-center gap-1.5 shadow-b-lg ${
                selectedId === type.name
                  ? "border-pink shadow-pink/30"
                  : "border-stone-200 shadow-stone-100/20"
              }`}
            >
              {type.img ? (
                <img src={type.img} alt={type.name} className="h-10" />
              ) : (
                <></>
              )}
              <p className="text-xs/tight text-stone-200 w-3/4 capitalize  ">
                {type.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {showModal && (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-50 flex justify-center items-end transition-opacity duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="border border-stone-200 rounded-sm w-full max-w-md px-4 py-4 bg-dark-bg transform md:-translate-y-10 opacity-100 transition-all duration-300 ease-out relative"
          >
            <X
              onClick={closeModal}
              className="text-stone-200 hover:text-pink w-6 h-6 cursor-pointer absolute top-2 right-4"
            />
            <h2 className="text-stone-200 text-lg font-semibold mt-2 text-center">
              All Products
            </h2>
            <div className="products my-6">
              <ul className="grid grid-cols-2 gap-4">
                {ModalData.map((type) => (
                  <li
                    key={type.name}
                    onClick={type.handleClick}
                    className="capitalize text-stone-300 border border-stone-200 rounded-lg p-2 bg-stone-600 hover:bg-stone-700 transition-all delay-75 cursor-pointer ease-in flex items-center gap-2"
                  >
                    {type.img ? (
                      <img
                        src={type.img}
                        alt={type.name}
                        className="h-8 mt-0.5"
                      />
                    ) : (
                      <></>
                    )}
                    <p className="text-xs text-stone-200 w-2/4 capitalize">
                      {type.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypesSlider;
