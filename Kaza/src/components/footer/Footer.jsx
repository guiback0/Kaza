import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./footer.scss";

export default function Footer({ logoUrl, copyrightText, alt }) {
   return (
      <footer>
         <div className="logo">
            <Link to={"/"}>
               <img className="footerLogo" src={logoUrl} alt={alt} />
            </Link>
         </div>
         <p>{copyrightText}</p>
      </footer>
   );
}

Footer.propTypes = {
   logoUrl: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   copyrightText: PropTypes.string.isRequired,
};