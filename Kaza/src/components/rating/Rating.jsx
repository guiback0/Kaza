import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./rating.scss";

export default function Rating({ rating }) {
   const stars = Array.from({ length: 5 }, (_, i) => ({
      filled: i < rating,
      id: `star-${i}`,
   }));

   return (
      <div className="rating">
         {stars.map(({ filled, id }) => (
            <FontAwesomeIcon
               icon={faStar}
               key={id}
               className={
                  filled
                     ? "rating__star rating__star--filled"
                     : "rating__star rating__star--empty"
               }
            />
         ))}
      </div>
   );
}

Rating.propTypes = {
   rating: PropTypes.string.isRequired,
};
