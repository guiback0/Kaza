import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
/* import Banner from "../components/banner/Banner"; */

function App() {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
}

export default App;
