import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Errorpage } from "../pages/Errorpage";
import { Feed } from "../pages/Feed";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },
]);
