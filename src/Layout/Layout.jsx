import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header"; // Example component
import Footer from "../Components/Footer/Footer"; // Example component
import useScrollToTop from "../Components/utils/useScrollToTop";

const Layout = () => {
  const location = useLocation();
  const Paths = [
    "/",
    "/find-broker",
    "/explore",
    "/insightshub",
    "/mortgage",
  ];
  const isPaths = Paths.includes(location.pathname);

  useScrollToTop();
  return (
    <div>
      <Header />
      <main
        className={`main ${isPaths ? "" : " pt-[58px] sm:pt-[72px] lg:pt-[120px]"}`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
