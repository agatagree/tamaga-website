import { Footer } from "./components/Footer/Footer";
import { Content } from "./components/Content/Content";
import { HomePage } from "./components/Content/HomePage/HomePage";
import { ProjectsList } from "./components/Content/ProjectsList/ProjectsList";
import { SingleProject } from "./components/Content/SingleProject/SingleProject";
import { Message } from "./utils/Messages/Message";
import { Info } from "./components/Content/Info/Info";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<Content />}>
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/info" element={<Info />} />
      </Route>
      <Route path="*" element={<Message message={"pageNotFound"} />} />
    </Routes>
  );
};

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

const App = () => {
  return (
    <div className="layout">
      <div className="content">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
