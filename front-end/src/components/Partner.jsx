import { container, partners, subcontainer_col } from "../assets/dummy";
import SectionHeading from "./SectionHeading";
const Partner = () => {
  return (
    <div className={container}>
      <div className={subcontainer_col}>
        <div className="flex flex-col w-full">
          <SectionHeading
            title="Our Trusted Partners"
            subt="Together for Your Security"
          />
        </div>
        <div className="btm-part mt-10">
          <ul className="grid grid-flow-row grid-cols-3 md:grid-cols-4 justify-center gap-1 md:gap-0">
            {partners.map((img, index) => (
              <li
                key={index}
                className="md:border md:border-stone-400 px-4 py-4 rounded-none bg-stone-700/30 md:bg-stone-700/100 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt=""
                  className=" h-[50px] md:h-[100px] w-auto grayscale hover:grayscale-0 transition delay-50 ease"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partner;
