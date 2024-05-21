import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Index from "./pages/index/Index";
import NotFound from "./pages/error/NotFound";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            index: true, // Utilisez "index: true" au lieu de "path: "/" pour la route d'index
            element: <Index />, 
         },
         /*  {
            path: "/about",
            element: (
               <div>
                  About
                  <nav>
                     <NavLink to="/">Main</NavLink>
                     <NavLink to="/about">A propos</NavLink>
                  </nav>
               </div>
            ),
         }, */
         /* {
            path: "/logement/:id",
            element: <Logement />,
         }, */
         {
            path: "*",
            element: <NotFound />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
