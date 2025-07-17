import { container, subcontainer, benifits } from "../assets/dummy";
import SectionHeading from "./SectionHeading";
import ben1 from "../assets/ben1.webp";

const BenCard = ({ img, title, subTitle }) => {
  return (
    <div className="benifits-card border border-stone-300 rounded-sm py-3 px-2 flex flex-col gap-4 md:w-[17vw] h-[220px] hover:scale-110  transition duration-300 ease-in-out cursor-pointer hover:shadow-xl/30 items-center md:items-start">
      <img src={img} alt="" className="h-[110px] w-[110px]" />
      <div className="card-content flex flex-col items-center md:items-start text-center md:text-start   w-3/4 md:w-full">
        <h2 className="font-semibold text-md text-stone-200">{title}</h2>
        <p className="font-thin text-sm text-stone-300">{subTitle}</p>
      </div>
    </div>
  );
};

const Benifits = () => {
  return (
    <div className={container}>
      <div className={subcontainer}>
        <div className="">
          <div className="top-container w-[100%] flex items-center !justify-between">
            <div className="l-part w-[100%]">
              <div className="flex flex-col">
                <SectionHeading
                  title="Unlock Exclusive Benefits"
                  subt="Faster, Smarter, Safer"
                />
              </div>
              <p className="text-sm text-center md:text-justify mt-6 md:w-[80%]  text-stone-300 px-2">
                When you buy insurance through TrueCover, you’re not just
                picking a policy, you’re unlocking a smarter, safer way to
                secure your future. We cover the following —
                <span className="hidden md:flex">
                  We eliminate complexity with side-by-side comparisons,
                  AI-driven suggestions, no hidden fees, and a digital policy
                  vault that travels with you. Our trusted partners and 24/7
                  support ensure you’re covered — not just financially, but
                  personally too.
                </span>
              </p>
            </div>

            <div className="hidden md:block r-part md:w-[30%]">
              <img src={ben1} alt="" className="w-full" />
            </div>
          </div>
          <div className="btm-containe">
            <div className="w-full py-4">
              <ul className="grid grid-flow-row md:grid-flow-col grid-cols-2 gap-6">
                {benifits.map(({ id, img, title, subtitle }) => (
                  <li key={id} className="w-full">
                    {" "}
                    <BenCard img={img} title={title} subTitle={subtitle} />{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
