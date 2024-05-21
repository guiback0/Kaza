import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
   return (
      <footer>
         <div className="logo">
            <Link to={"/"}>
               <img
                  className="footerLogo"
                  src="/src/assets/whiteLogo.svg"
                  alt="Logo Kasa"
               />
            </Link>
         </div>
         <p>&copy; 2020 Kaza. All rights reserved</p>
      </footer>
   );
}

export default Footer;
