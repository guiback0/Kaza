import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./footer.scss";

export default function Footer({ footerLogo, copyrightText, imageAlt }) {
   return (
      <footer>
         <div className="logo">
            <Link to={"/"}>
               <img className="footerLogo" src={footerLogo} alt={imageAlt} />
            </Link>
         </div>
         <p>{copyrightText}</p>
      </footer>
   );
}

Footer.propTypes = {
   footerLogo: PropTypes.string.isRequired,
   imageAlt: PropTypes.string.isRequired,
   copyrightText: PropTypes.string.isRequired,
};
