import { Content } from "./components/Content/Content";
import { HomePage } from "./components/Content/HomePage/HomePage";
import { ProjectsList } from "./components/Content/ProjectsList/ProjectsList";
import { SingleProject } from "./components/Content/SingleProject/SingleProject";
import { Message } from "./utils/Messages/Message";
import { Info } from "./components/Content/Info/Info";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    errorElement: <Message message={"pageNotFound"} />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsList />,
        errorElement: <Message message={"pageNotFound"} />,
      },
      {
        path: "/projects/:id",
        element: <SingleProject />,
        errorElement: <Message message={"pageNotFound"} />,
      },
      {
        path: "/info",
        element: <Info />,
        errorElement: <Message message={"pageNotFound"} />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
