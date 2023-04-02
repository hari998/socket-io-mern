import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import App from "./App";
import "./index.css";
import { Errorpage } from "./pages/Errorpage";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} fallbackElement={<Errorpage />}>
    {/* <App /> */}
  </RouterProvider>
  // </React.StrictMode>
);
