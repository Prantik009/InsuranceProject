import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import TypesSlider from "./TypesSlider";

import { bike, dog, car, life, homeIsurance, doctor } from "../assets/dummy";

const GetQuote = () => {
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
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleNavigate = useCallback((path) => navigate(path), [navigate]);
  const toggleModal = useCallback(() => setShowModal((prev) => !prev), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  // 🔁 Mapping selected insurance to route
  const getQuoteRoute = useCallback(() => {
  const routeMap = {
    "car Insurance": "/car",
    "bike Insurance": "/bike",
    "Health Insurance": "/health",
    "term life Insurance": "/life",
    "Fire Insurance": "/fire",
    "Pet Insurance": "/pet",
  };

  return routeMap[selectedId] || "/";
}, [selectedId]);


  const handleGetQuote = () => {
    const route = getQuoteRoute();
    navigate(route);
  };

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
      handleClick: () => handleNavigate("/bike"), // ✅ Fixed
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
      handleClick: () => handleNavigate("/fire"), // ✅ Custom route
    },
    {
      name: "Pet Insurance",
      img: dog,
      handleClick: () => handleNavigate("/pet"), // ✅ Custom route
    },
  ],
  [handleNavigate]
);


  return (
    <div className="">
      <div className="mt-4 md:mt-15 relative">
        <div className="block md:hidden my-7 min-w-full">
          <TypesSlider />
        </div>

        <ul className="hidden md:flex justify-between md:w-[95%] lg:w-[55%] ">
          {InsuranceTypes.map((type) => (
            <div
              key={type.name}
              onClick={() => {
                if (type.handleClick) {
                  type.handleClick();
                } else {
                  setSelectedId(type.name);
                }
              }}
              className={`min-h-[100px] min-w-[100px] lg:mr-2 border flex flex-col items-center rounded-md justify-center text-center gap-2 shadow-lg cursor-pointer ${
                selectedId === type.name
                  ? "border-pink shadow-pink/10"
                  : "border-stone-200 shadow-stone-100/10"
              }`}
            >
              {type.img ? (
                <img src={type.img} alt={type.name} className="h-10" />
              ) : (
                <></>
              )}
              <p className="text-xs text-stone-200 w-2/4 capitalize">
                {type.name}
              </p>
            </div>
          ))}
        </ul>

        <div className="input-section md:mt-8 flex gap-4 flex-col md:flex-row px-4">
          <input
            type="text"
            placeholder="Enter Vehicle Regitration No."
            className="border border-stone-200 placeholder:text-center placeholder:capitalize px-8 py-3 bg-stone-400 text-sm rounded-md  md:rounded-full w-full md:w-[40%] uppercase outline-none "
          />
          <button
            onClick={handleGetQuote}
            className="rounded-md md:rounded-full text-stone-200 bg-pink px-4 py-2 cursor-pointer hover:bg-pink-500"
          >
            Get Quote
          </button>
        </div>

        {showModal && (
          <div
            onClick={closeModal}
            className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-50 flex justify-center items-end transition-opacity duration-300"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="border border-stone-200 rounded-2xl w-full max-w-md px-4 py-4 bg-black transform -translate-y-10 opacity-100 transition-all duration-300 ease-out relative"
            >
              <X
                onClick={closeModal}
                className="text-stone-200 hover:text-pink w-6 h-6 cursor-pointer absolute top-2 right-4"
              />
              <h2 className="text-stone-200 text-lg font-semibold mt-2 text-start border-b border-stone-300 pb-3 ">
                All Products
              </h2>
              <div className="products my-6">
                <ul className="grid grid-cols-3 gap-3">
                  {ModalData.map((type) => (
                    <li
                      key={type.name}
                      onClick={type.handleClick}
                      className="capitalize text-stone-300 border border-stone-200 rounded-sm p-2 bg-stone-600 hover:bg-stone-700 transition-all delay-75 cursor-pointer ease-in flex items-center gap-2 max-w-[120px]"
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
    </div>
  );
};

export default GetQuote;
