import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";

export const NavBar = ({ logoHidden }) => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    // <nav className={`${open ? "nav-full" : "nav-open"}`}>
      <nav className="nowa">

      <div className="nav-base">
      {!logoHidden && (
        <NavLink className="link18-logo" to="/">
          <span className="link18-logo--bold">tamaga</span> studio
        </NavLink>
      )}
      <BurgerMenu open={open} setOpen={setOpen} />
      </div>

      <div className={open ? "nav-links" : "nav-links-toggle"}>
        <NavLink
          className={open ? "link18" : "link24-t"}
          onClick={toggle}
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          className={open ? "link18" : "link24-t"}
          to="/about"
          onClick={toggle}
        >
          about
        </NavLink>
        <NavLink
          className={open ? "link18" : "link24-t"}
          to="/contact"
          onClick={toggle}
        >
          contact
        </NavLink>
      </div>
    </nav>
  );
};
