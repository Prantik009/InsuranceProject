import { container, subcontainer_col } from "../assets/dummy";
import img1 from "../assets/Hero/img1.webp";
import img2 from "../assets/Hero/img2.webp";
import vid1 from "../assets/Hero/vid1.MP4";
import GetQuote from "./GetQuote";

const Hero = () => {
  return (
    <div className={container}>
      <div className={subcontainer_col}>
        <div className="flex justify-center items-center">
          <div className="left justify-between flex flex-col items-center md:items-start">
            <h1 className="uppercase text-lg sm:text-3xl  md:text-6xl lg:text-7xl md:w-[100%] xl:w-[80%] font-black text-stone-200 tracking-wider">
              Protect <span className="text-pink">what</span> matters <span className="text-pink">most.</span>
            </h1>
            <div className="types w-full md:mt-8 xl:mt-12">
                <GetQuote />
            </div>
          </div>
          <div className="hidden right xl:flex flex-col gap-14 justify-between items-center">
            <div className="flex justify-center items-center xl:gap-8 xl:mr-30">
              <img
                src={img1}
                alt=""
                className="h-[250px]  rounded-md rounded-br-4xl object-cover"
              />
              <video
                src={vid1}
                className="md:h-[180px] rounded-full hidden xl:flex border-8 border-stone-300"
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <div className="">
              <img
                src={img2}
                alt=""
                className="h-[250px] rounded-md rounded-tl-4xl "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
