import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "./App.module.scss";

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header isMobile={isMobile} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
