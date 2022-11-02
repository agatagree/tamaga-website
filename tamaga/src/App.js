// import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Content } from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";
import { UiKit } from "./Styles/UiKit";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <UiKit /> */}
        <div className="layout">
          <NavBar />
          <Content />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
