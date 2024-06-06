import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./card.scss";

export default function Card({ id, title, cover }) {
   const cardStyle = {
      background: `url(${cover}) no-repeat center/cover`,
   };

   return (
      <Link to={`/logement/${id}`} className="card-link">
         <div className="card" style={cardStyle}>
            <h3 className="card__title">{title}</h3>
         </div>
      </Link>
   );
}

Card.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   cover: PropTypes.string.isRequired,
};
