import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.scss";

export default function Header({ navigation, logoUrl, alt }) {
   return (
      <header>
         <div className="logo">
            <Link to={"/"}>
               <img className="headerLogo" src={logoUrl} alt={alt} />
            </Link>
         </div>
         <nav className="nav">
            <ul>
               {navigation.map((item) => (
                  <li key={item.name}>
                     <Link to={item.path}>
                        <span>{item.name}</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}

Header.propTypes = {
   logoUrl: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   navigation: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string.isRequired,
         path: PropTypes.string.isRequired,
      })
   ).isRequired,
};
