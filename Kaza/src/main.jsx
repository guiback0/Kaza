import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Index from "./pages/index/Index";
import Rent from "./pages/rent/Rent";
import NotFound from "./pages/error/NotFound";
import About from "./pages/about/About";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            index: true,
            element: <Index />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/logement/:id",
            element: <Rent />,
         },
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
