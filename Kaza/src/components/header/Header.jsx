import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./header.scss";

export default function Header({ navigation, headerLogo, imageAlt }) {
   const location = useLocation();

   return (
      <header className="header">
         <div className="header__logo">
            <Link to={"/"} className="header__nav-link">
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
                     <Link
                        to={item.path}
                        className="header__nav-link"
                        aria-current={
                           item.path === location.pathname ? "page" : undefined
                        }>
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
