import { container, subcontainer_col, impactData } from "../assets/dummy";

import sec1 from "../assets/aboutImgs/sec1.webp";
import sec2 from "../assets/aboutImgs/sec2.webp";

import {
  CircleCheckBig,
} from "lucide-react";
import Contact from "./Contact";

const doData = [
  { index: 1, content: "Compare policies from top insurers—no hidden tricks" },
  {
    index: 2,
    content: "Tailored plans for Car, Bike, Health, Life, and Family",
  },
  { index: 3, content: "Instant premium quotes, transparent policy info" },
  { index: 4, content: "Real people for real help—before and after purchase" },
];

const whyData = [
  "The policies are easy to understand",
  "The guidance is personalized and honest",
  "The support is human, not robotic",
  "Most importantly: your interests come first",
];

const sectionHeading =
  "w-full text-2xl lg:text-4xl font-bold text-center text-stone-200 mb-4";
const sectionContent =
  " w-full lg:w-[80%] text-center text-md lg:text-lg text-stone-400";

const sectionStyle =
  "w-full flex flex-col items-center justify-center mt-8 mb-8";

const DoCard = ({ index, content }) => {
  return (
    <div className="card w-full border-none border-stone-300 rounded-md relative py-6 px-6 h-[80px] bg-gray-700">
      <div className="absolute number text-stone-200 rounded-full bg-gray-600 h-9 w-9 flex items-center justify-center -top-[20%] left-[42%]">
        {index}
      </div>
      <div className="content text-stone-400 font-thin text-sm text-center">
        {content}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className={container}>
      <div className={subcontainer_col}>
        <div className={`about-us-section ${sectionStyle}`}>
          <h2 className={sectionHeading}>
            The People Behind{" "}
            <span className="lg:hidden">
              {" "}
              <br />{" "}
            </span>{" "}
            <span className="text-pink">The Promise</span>
          </h2>
          <p className={sectionContent}>
            At <span className="text-pink">TrueCoverSolutions</span>, we are
            more than an insurance platform—we are your insurance allies.
            Whether you're looking to protect your car, your health, or your
            family’s future, we’re here to guide you through every step with
            transparency, empathy, and zero sales pressure. <br /> <br />
            We were born out of frustration with confusing policies, biased
            advice, and broken customer service. That’s why we built
            TrueCoverSolutions: To make insurance understandable, accessible,
            and <span className="text-pink">100% customer-first</span>.
          </p>

          {/* img section  */}
          <div className="w-full lg:w-[80%]">
            <img src={sec1} alt="sec1Img" />
          </div>
        </div>

        <div className={`what-we-do-section ${sectionStyle}`}>
          <h2 className={sectionHeading}>
            How We’ve Got You <span className="text-pink">Covered</span>
          </h2>
          <p className={sectionContent}>
            We simplify insurance using a mix of technology, human empathy, and
            unbiased expertise.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8 mt-8 place-items-center px-10 lg:px-0">
            {doData?.map((item) => (
              <DoCard
                key={item.index}
                index={item.index}
                content={item.content}
              />
            ))}
          </div>
        </div>

        <div className={`why-us-section ${sectionStyle} mt-25`}>
          <h2 className={sectionHeading}>
            Why TrueCoverSolutions <span className="text-pink">Exists</span>
          </h2>
          <p className={`${sectionContent} !text-start`}>
            Because insurance isn’t just paperwork. It’s peace of mind. It’s a
            promise to your loved ones. It’s your backup plan when life
            surprises you. We get that. That’s why we’re building a platform
            where:
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center w-full lg:w-[80%]">
            <ul className="w-full md:w-1/2 mt-4">
              {whyData.map((item, index) => (
                <li key={index} className="flex gap-2 text-stone-300 mb-4">
                  <CircleCheckBig className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
            {/* img section  */}
            <img src={sec2} alt="" className="w-full md:w-1/2" />
          </div>
        </div>

        <div className={`impact-section ${sectionStyle}`}>
          <h2 className={sectionHeading}>
            Our Impact So <span className="text-pink">Far</span>
          </h2>
          <p className={sectionContent}>
            We have an impeccable track record of keeping customer interest at
            the forefront, for more than a decade now.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {impactData?.map((item) => (
              <div
                key={item.para}
                className="impact-card flex items-center justify-center flex-col border border-stone-400 rounded-md py-3 px-3"
              >
                <img
                  src={item.img}
                  alt={item.para}
                  className="h-[80px] md:h-[100px]"
                />
                <h2 className="stats text-2xl font-bold text-pink py-3 border-none border-t-stone-200 mt-1">
                  {item.stats}
                </h2>
                <div className="para text-lg/tight text-stone-400 text-center md:px-11">
                  {item.para}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Contact/>
      </div>
    </div>
  );
};

export default About;
