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

const headerAndFooter = {
   headerLogo: "/src/assets/redLogo.svg",
   footerLogo: "/src/assets/whiteLogo.svg",
   imageAlt: "Logo Kasa",
   copyrightText: "© 2020 Kasa. All rights reserved",
};

export default function App() {
   return (
      <div className="app">
         <Header navigation={navigation} {...headerAndFooter} />
         <Outlet />
         <Footer {...headerAndFooter} />
      </div>
   );
}
