import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import clsx from "clsx";

export const NavBar = ({ logoHidden }) => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [toggle]);

  return (
    <nav className={clsx("nav-full", location.pathname === '/info' && "nav-info")}>
      <div className={toggle ? "nav-base" : " nav-base nav-open"}>
        <NavLink
          className={logoHidden && toggle ? "hidden" : "link18-logo"}
          to="/"
        >
          <span className="link18-logo--bold">tamaga</span> studio
        </NavLink>

        <BurgerMenu toggle={toggle} setToggle={setToggle} />
      </div>

      <div className="nav-links">
        <NavLink className="link18" to="/projects">
          projects
        </NavLink>
        <NavLink className="link18" to="/info">
          info
        </NavLink>
      </div>

      <div className={toggle ? "hidden" : "nav-links-toggle"}>
        <NavLink className="link24-t" onClick={handleToggle} to="/projects">
          projects
        </NavLink>
        <NavLink className="link24-t" to="/info" onClick={handleToggle}>
          info
        </NavLink>
      </div>
      <div className={toggle ? "hidden" : "nav-contact"}>
        <p className="H05--bold">Get in touch</p>
        <a className="link18" href="mailto:ag.tamagastudio@gmail.coml">
          info@tamagastudio.pl
        </a>
      </div>
    </nav>
  );
};
