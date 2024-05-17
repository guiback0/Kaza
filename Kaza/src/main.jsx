import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import NotFound from "./pages/error/NotFound";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
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
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
