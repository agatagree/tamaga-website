import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <Outlet />
    </div>
  );
};
