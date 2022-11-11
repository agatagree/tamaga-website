import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";

export const NavBar = ({ logoHidden }) => {
  const [toggle, setToggle] = useState(true);

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
    <nav className="nav-full">
      <div className={toggle ? "nav-base" : " nav-base nav-open"}>
        <NavLink
          className={logoHidden && toggle ? "hidden" : "link18-logo"}
          to="/"
        >
          <span className="link18-logo--bold">tamaga</span> studio
        </NavLink>

        <BurgerMenu toggle={toggle} setToggle={setToggle} />
      </div>

      <div className={toggle ? "nav-links" : "nav-links-toggle"}>
        <NavLink
          className={toggle ? "link18" : "link24-t"}
          onClick={handleToggle}
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          className={toggle ? "link18" : "link24-t"}
          to="/about"
          onClick={handleToggle}
        >
          about
        </NavLink>
        <NavLink
          className={toggle ? "link18" : "link24-t"}
          to="/contact"
          onClick={handleToggle}
        >
          contact
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
