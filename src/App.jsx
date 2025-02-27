import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import ComingSoon from "./Pages/ComingSoon/ComingSoon.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import { useEffect } from "react";
import AOS from "aos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Ensure Layout is used here, so it gets the Router context
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ComingSoon />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
