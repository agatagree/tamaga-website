import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Content } from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, Layout } from "./utils/Global.styled"

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <Layout>
          <NavBar />
          <Content />
          {/* <Footer /> */}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
