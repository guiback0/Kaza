import { Link } from "react-router-dom";
import "./notFound.scss";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__error-code">404</h2>
      <p className="not-found__error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="not-found__back-home-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}