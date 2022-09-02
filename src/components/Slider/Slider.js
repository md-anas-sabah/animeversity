import { useState } from "react";
import "./Slider.css";
import { sliderData } from "./slider-data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Button from "./Button";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider">
      <AiOutlineArrowLeft />
      <AiOutlineArrowRight />
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
                  {/* <Link to="/login-or-signup">
                    <button className="--btn --btn-primary">
                      Watch Trailer
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-play-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                      </svg>
                    </button>
                  </Link> */}
                  <div className="bn">
                    <Button title="Watch Now" />
                    <Button title="Detail" />
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
