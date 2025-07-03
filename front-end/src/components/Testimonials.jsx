import { container, subcontainer_col, testi } from "../assets/dummy";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionHeading from "./SectionHeading";
import TestCard from "./TestCard";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
        <div className="flex flex-col w-full">
          <SectionHeading
            title="What Others Say About us"
            subt="Together for Your Security"
          />
        </div>
        <div className="btm-part">
          <div className="block my-7 min-w-full">
            <div className="slider-container w-screen sm:w-[80vw] px-4">
              <Slider {...settings}>
                {testi.map(({index ,name, img, date, rating, smallRate, content}) => (
                  <div key={index} className="max-w-full px-12">
                    <div className="max-w-[300px] border-1 border-stone-200 rounded-tl-4xl rounded-br-4xl rounded-sm shadow-lg/50 shadow-stone-600">
                      <TestCard
                      name={name}
                      img={img}
                      date={date}
                      rating={rating}
                      smallRate={smallRate}
                      content={content}
                    />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
