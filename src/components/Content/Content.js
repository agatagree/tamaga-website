import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

export const Content = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="layout">
        <div className="content">
          {pathname !== "/" && <NavBar />}
          <Outlet />
          <ScrollRestoration />
        </div>
        <Footer />
      </div>
    </>
  );
};
