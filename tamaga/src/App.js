import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Content } from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Content />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
