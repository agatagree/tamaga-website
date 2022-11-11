import { Footer } from "./components/Footer/Footer";
import { Content } from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";
import { UiKit } from "./Styles/UiKit";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Content/HomePage/HomePage";
import { ProjectsList } from "./components/Content/ProjectsList/ProjectsList";
import { About } from "./components/Content/About/About";
import { Contact } from "./components/Content/Contact/Contact";
import { SingleProject } from "./components/Content/SingleProject/SingleProject";
import { WrongWebsite } from "./utils/Messages/WrongWebsite";
import { useState} from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UiKit /> */}
        <div className="layout">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/" element={<Content />}>
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/projects/:id" element={<SingleProject />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<WrongWebsite />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
