import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.scss";

export default function Header({ navigation, headerLogo, imageAlt }) {
   return (
      <header className="header">
         <div className="header__logo">
            <Link to={"/"}>
               <img
                  className="header__logo-img"
                  src={headerLogo}
                  alt={imageAlt}
               />
            </Link>
         </div>
         <nav className="header__nav">
            <ul className="header__nav-list">
               {navigation.map((item) => (
                  <li className="header__nav-item" key={item.name}>
                     <Link to={item.path} className="header__nav-link">
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
   headerLogo: PropTypes.string.isRequired,
   imageAlt: PropTypes.string.isRequired,
   navigation: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string.isRequired,
         path: PropTypes.string.isRequired,
      })
   ).isRequired,
};
