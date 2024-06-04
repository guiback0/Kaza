import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const navigation = [
   {
      name: "Accueil",
      path: "/",
   },
   {
      name: "À Propos",
      path: "/about",
   },
];

const headerLogo = "/src/assets/redLogo.svg";
const footerLogo = "/src/assets/whiteLogo.svg";
const altText = "Logo Kasa";
const copyrightText = "© 2020 Kaza. All rights reserved";

export default function App() {
   return (
      <div className="app">
         <Header navigation={navigation} logoUrl={headerLogo} alt={altText} />
         <Outlet />
         <Footer logoUrl={footerLogo} copyrightText={copyrightText} alt={altText} />
      </div>
   );
}
