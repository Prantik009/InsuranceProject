import { container, subcontainer, aboutDesc } from "../assets/dummy";


const Box = ({ bLeftColor, boxEmoji, boxTitle, boxContent }) => {

  const leftBorderClass = bLeftColor ? `border-l-${bLeftColor}-500` : '';

  return (
    <div className={`box flex md:flex-col items-center md:items-start justify-start border-1 border-stone-300 border-l-${leftBorderClass} rounded-xl px-4 py-6 w-full md:w-[230px] shadow-xl/30`}>
      <h1 className="emoji text-3xl ml-[-6px] md:mb-4">{boxEmoji}</h1>
      <div className="contnent">
        <h3 className="box-title font-bold text-xl  text-stone-200">{boxTitle}</h3>
      <p className="box-content text-sm lowercase text-stone-300">
        {boxContent}
      </p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <>
      <div className={container}>
        <div className={subcontainer}>
          <div className="flex items-center justify-center flex-col md:flex-row gap-8 md:gap-0 xl:gap-15">
            <div className="left-part w-[80%] md:w-[40%] text-center md:text-start">
            <h1 className="section-heading text-2xl sm:text-3xl md:text-6xl font-bold text-stone-300">
              The <span className="text-pink">Smarter Choice</span> for Your{" "}
              <span className="text-pink">Insurance</span> Needs
            </h1>
          </div>
          <div className="right-part w-full md:w-[60%] flex flex-col justify-center item-center md:items-center">
          <div className="top-part flex flex-col md:flex-row md:gap-2 xl:gap-10">
            <div className="box-1">
              <Box
                boxEmoji={aboutDesc[0].emoji}
                boxTitle={aboutDesc[0].title}
                boxContent={aboutDesc[0].content}
              />
            </div>
            <div className="box-2 mt-8">
            <Box
                boxEmoji={aboutDesc[1].emoji}
                boxTitle={aboutDesc[1].title}
                boxContent={aboutDesc[1].content}
              />
            </div>
          </div>
          <div className="btm-part flex flex-col md:flex-row md:gap-2 xl:gap-10 md:ml-20 mt-6">
            <div className="box-1">
            <Box
                boxEmoji={aboutDesc[2].emoji}
                boxTitle={aboutDesc[2].title}
                boxContent={aboutDesc[2].content}
              />
            </div>
            <div className="box-2 mt-8">
            <Box
                boxEmoji={aboutDesc[3].emoji}
                boxTitle={aboutDesc[3].title}
                boxContent={aboutDesc[3].content}
              />
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyUs;
