import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./footer.scss";

export default function Footer({ footerLogo, copyrightText, imageAlt }) {
   return (
      <footer className="footer">
         <div className="footer__logo">
            <Link to={"/"}>
               <img className="footer__logo-img" src={footerLogo} alt={imageAlt} />
            </Link>
         </div>
         <p className="footer__copyright">{copyrightText}</p>
      </footer>
   );
}

Footer.propTypes = {
   footerLogo: PropTypes.string.isRequired,
   imageAlt: PropTypes.string.isRequired,
   copyrightText: PropTypes.string.isRequired,
};
