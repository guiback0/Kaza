import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./header.scss";

export default function Header({ navigation, headerLogo, imageAlt }) {
   return (
      <header>
         <div className="logo">
            <Link to={"/"}>
               <img className="headerLogo" src={headerLogo} alt={imageAlt} />
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
   headerLogo: PropTypes.string.isRequired,
   imageAlt: PropTypes.string.isRequired,
   navigation: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string.isRequired,
         path: PropTypes.string.isRequired,
      })
   ).isRequired,
};
