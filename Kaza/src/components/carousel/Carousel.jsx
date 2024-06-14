import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faChevronLeft,
   faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./carousel.scss";

const altText = "Carousel d'images du logement ";

export default function Carousel({ pictures, name }) {
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
            {pictures.length > 1 && (
               <>
                  <button onClick={prevSlide}>
                     <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <span className="carousel-number">{currentIndex + 1}/{pictures.length}</span>
                  <button onClick={nextSlide}>
                     <FontAwesomeIcon icon={faChevronRight} />
                  </button>
               </>
            )}
         </div>
         <img
            className="carousel__pictures"
            src={pictures[currentIndex]}
            alt={altText + name}
         />
      </div>
   );
}

Carousel.propTypes = {
   pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
   name: PropTypes.string.isRequired,
};
