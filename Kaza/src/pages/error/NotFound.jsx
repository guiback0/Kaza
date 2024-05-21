import { Link } from "react-router-dom";
import "./notFound.scss";

function notFound() {
   return (
      <div className="notFound">
         <h2 className="err404">404</h2>
         <p className="errText">
            Oups! La page que vous demandez n'existe pas.
         </p>
         <Link to="/" className="backHome">
            Retourner sur la page d’accueil
         </Link>
      </div>
   );
}

export default notFound;
