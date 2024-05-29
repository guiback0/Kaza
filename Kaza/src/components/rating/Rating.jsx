import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./rating.scss";

export default function Rating({ rating }) {
   const stars = Array.from({ length: 5 }, (_, i) => i < rating);

   return (
      <div className="rating">
         {stars.map((filled, i) => (
            <FontAwesomeIcon
               icon={faStar}
               key={i}
               className={filled ? "filledStar" : "emptyStar"}
            />
         ))}
      </div>
   );
}

Rating.propTypes = {
   rating: PropTypes.string.isRequired,
};
