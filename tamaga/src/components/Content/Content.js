import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage/HomePage";
import { ProjectsList } from "./ProjectsList/ProjectsList";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
