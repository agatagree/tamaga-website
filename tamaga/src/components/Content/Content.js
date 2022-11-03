import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
// import { ProjectsList } from "./ProjectsList/ProjectsList";
// import { About } from "./About/About";
// import { Contact } from "./Contact/Contact";
import { WrongWebsite } from "../../utils/Messages/WrongWebsite";
import { NavBar } from "../NavBar/NavBar";

export const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <Outlet />
    </div>
  );
};
