import { useState, useEffect } from "react";
import "./Slider.css";
import { sliderData } from "./slider-data";
// import { Link } from "react-router-dom";
import Button from "./Button";
import DetailButton from "./DetailButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);
  let slideInterval;
  let autoScroll = true;
  let intervalTime = 4000;

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <KeyboardArrowLeftIcon className="arrow prev" onClick={prevSlide} />
      <KeyboardArrowRightIcon className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="slide" className="sliderImg" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>

                  <div className="bn">
                    <Button />
                    <DetailButton />
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
