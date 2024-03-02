import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

function StarRating() {
  const [rating, setRating] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleStarHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleStarLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <div
      className="flex flex-row text-3xl pt-3 overflow-hidden"
      onMouseLeave={handleStarLeave}
    >
      {[...Array(10)].map((_, index) => (
        <FaRegStar
          key={index}
          className={`
            ${index < rating ? "text-yellow-500" : "text-gray-500"}
            ${index <= hoverIndex ? "text-yellow-500" : ""}
            transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer
          `}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
        />
      ))}
    </div>
  );
}

export default StarRating;
