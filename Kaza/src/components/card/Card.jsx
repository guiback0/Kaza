import { Link } from "react-router-dom";
import "./card.scss";

export default function Card({ title, cover }) {
   const cardStyle = {
      background: `url(${cover})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
   };
   return (
      <>
         <Link to={"/"}>
            <div className="card" style={cardStyle}>
               <p className="cardTitle">{title}</p>
            </div>
         </Link>
      </>
   );
}
