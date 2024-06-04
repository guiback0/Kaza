import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./carousel.scss";

export default function Carousel({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
   };

   const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % pictures.length);
   };

   return (
      <div className="carousel">
         <div className="carousel__nav">
            <button onClick={prevSlide}>
               <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={nextSlide}>
               <FontAwesomeIcon icon={faChevronRight} />
            </button>
         </div>
         <img
            className="carousel__pictures"
            src={pictures[currentIndex]}
            alt=""
         />
      </div>
   );
}

Carousel.propTypes = {
   pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
