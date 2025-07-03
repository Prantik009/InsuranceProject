const SectionHeading = ({title, subt}) => {
  return (
    <>
      <h1 className="font-bold text-2xl text-stone-100 text-center md:text-start">{title}</h1>
      <h4 className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 font-semibold text-stone-200">
        {subt}
        <span>
          <hr className=" w-[50vw] md:w-[200px] border-1 border-[#f45b8a] mt-1 rounded-full" />
        </span>{" "}
      </h4>
    </>
  );
};

export default SectionHeading;