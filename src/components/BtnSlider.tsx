import React from "react";
import "../Slider.css";
import leftArrow from "../media/icons/left-arrow.svg";
import rightArrow from "../media/icons/right-arrow.svg";

interface BtnSliderProps {
  direction: string;
  moveSlide: () => void;
}

const BtnSlider: React.FC<BtnSliderProps> = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? "btn-slide next" : "btn-slide prev"
      }
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="Click"
      />
    </button>
  );
};

export default BtnSlider;
