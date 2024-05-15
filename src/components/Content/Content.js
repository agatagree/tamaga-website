import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const Content = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
