import React from "react";
import { container, subcontainer_col } from "../assets/dummy";

const DoCard = ({ index, content }) => {
  return (
    <div className="card w-full md:w-2/3 border-none border-stone-300 rounded-md relative py-6 px-6 h-[80px] bg-gray-800">
      <div className="absolute number text-stone-200 rounded-full bg-gray-500 h-9 w-9 flex items-center justify-center -top-[20%] left-[42%]">
        {index}
      </div>
      <div className="content text-stone-400 font-thin text-sm text-center">
        {content}
      </div>
    </div>
  );
};

const Details = ({sec_img, sec_form, sec_type, sec_data}) => {
  return (
    <div className={container}>
      <div className={subcontainer_col}>
        {/* top section  */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-center h-1/2">
          <div className="w-full md:w-3/4 xl:w-1/2">
            {/* img section  */}
            <img src={sec_img} alt="" className="object-cover" />
          </div>
          <div className="w-full md:w-3/4 xl:w-1/2">
            {/* form section  */}
            {typeof sec_form === "function" && sec_form()}
          </div>
        </div>

        {/* bottom section  */}
        <div className="w-full flex flex-col items-center justify-center h-1/2">
          {/* heading section  */}
          <h2 className="w-full lg:px-10 lg:w-[80%] text-md md:text-xl xl:text-2xl capitalize text-stone-200 text-center mt-10">
            <span className="font-black text-pink">3</span> reasons,you need{" "}
            <span className="font-bold">{sec_type} insurance</span> from{" "}
            <span className="font-bold">TrueCoverSolutions</span>
          </h2>
          {/* grid section  */}
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 mt-8 gap-10 md:gap-6 place-items-center px-10  md:px-0">
            {sec_data?.map((item) => (
              <DoCard
                key={item.index}
                index={item.index}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;