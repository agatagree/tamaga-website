import { Link } from "react-router-dom";
import { NavBar } from "../../../NavBar/NavBar";

export const IntroSection = () => {
  return (
    <>
      <div className="intro-wrapper">
        <div className="banner">
          <div className="intro-gallery"></div>
        </div>
        <div className="intro-content-layout">
          <NavBar logoHidden={true}/>
          <div className="intro-content-wrapper">
            <div className="intro-content">
              <div className="intro-text">
                <h1 className="H01">
                  <span className="H01--bold">tamaga</span> studio*
                </h1>
                <h2 className="H05">*design and architecture</h2>
              </div>
              <Link className="btn-primary-lg-default" to="/projects">
                Check our projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
