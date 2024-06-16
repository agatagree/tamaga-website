import { Footer } from "./components/Footer/Footer";
import { Content } from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Content/HomePage/HomePage";
import { ProjectsList } from "./components/Content/ProjectsList/ProjectsList";
import { SingleProject } from "./components/Content/SingleProject/SingleProject";
import { Message } from "./utils/Messages/Message";
import { UiKit } from "./styles/UiKit";
import { Info } from "./components/Content/Info/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/" element={<Content />}>
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/projects/:id" element={<SingleProject />} />
                <Route path="/info" element={<Info />} />
                <Route path="/uiKit" element={<UiKit />} />
              </Route>
              <Route path="*" element={<Message message={"pageNotFound"} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
