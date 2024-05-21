import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ id, title, cover }) {
   const cardStyle = {
      background: `url(${cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
   };
   return (
      <>
         <Link to={`/logement/${id}`}>
            <div className="card" style={cardStyle}>
               <h3 className="cardTitle">{title}</h3>
            </div>
         </Link>
      </>
   );
}
