import React from "react";
import ReactDOM from "react-dom/client";
/* import "./index.css"; */
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <div>
            Main
            <nav>
               <NavLink to="/">Main</NavLink>
               <NavLink to="/about">A propos</NavLink>
            </nav>
         </div>
      ),
      children: [
         {
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
         },
         /* {
           path: "/logement/:id",
           element: <Logement />,
        }, */
         {
            path: "*",
            element: <div>404</div>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
