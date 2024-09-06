import Root from "./routes/root";
import Index from "./routes/index";
import AboutMe from "./routes/about";
import Contact from "./routes/contact";
import Projects from './routes/projects';
import Services from './routes/services';
//import Forum from './routes/forum';
//import { loader as contentsLoader, Contents} from './routes/contents';
import Content from './routes/content';
import ErrorPage from "./routes/error-page";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import AboutSite from "./routes/about-site";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "contact-me",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-this-site",
        element: <AboutSite />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);