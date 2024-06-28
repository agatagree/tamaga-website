import { Outlet, useLocation } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const Content = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="layout">
        <div className="content">
          {pathname !== "/" && <NavBar />}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
