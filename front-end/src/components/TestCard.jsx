import { ChevronUp } from "lucide-react";
import { useState } from "react";
import StarRatings from "react-star-ratings";

const RatingComponent = ({ rating }) => (
  <StarRatings
    rating={rating}
    starRatedColor="gold"
    numberOfStars={5}
    starDimension="15px"
    starSpacing="2px"
    name="rating"
  />
);

const TestCard = ({ name, img, date, rating, smallRate, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="text w-full flex items-center justify-center flex-col py-2">
      <img src={img} alt={name} className=" h-[80px] md:h-[100px]  w-[80px] md:w-[100px] rounded-full"/>
      <h2 className="text-stone-100  text-xl font-bold">{name}</h2>
      <RatingComponent rating={rating} />
      <h2 className="text-stone-200 font-semibold sm:text-sm lg:text-md px-2">{smallRate}</h2>
      <p className={`text-stone-400 text-xs px-2 text-center tracking-tighter transition-all duration-500 ease-in-out ${isExpanded ? ' line-clamp-none': ' line-clamp-3'}`}>{content}</p>
      <button onClick={toggleExpand} className="cursor-pointer transition-transform duration-300 ">
        <ChevronUp className={`transition-transform duration-300 text-stone-300 hover:text-pink ${isExpanded ? "rotate-0" : "rotate-180"}`}/>
      </button>
      <h2 className="text-pink font-bold text-xs">{date}</h2>
    </div>
  );
};

export default TestCard;