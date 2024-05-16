import { Link, useLocation } from "react-router-dom";
import "./header.css"

function Header() {
   return (
      <header>
         <div className="logo">
            <Link to={"/"}>
               <img
                  className="headerLogo"
                  src="/src/assets/redLogo.svg"
                  alt="Logo Kasa"
               />
            </Link>
         </div>
         <nav className="nav">
            <ul>
               <li>
                  <Link to={"/"}>
                     <span> Accueil</span>
                  </Link>
               </li>
               <li>
                  <Link to={"/about"}>
                     <span>À Propos</span>
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
