import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState } from "react";

export const NavBar = ({ logoHidden }) => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav className={`${logoHidden ? "nav-hidden" : "nav-full"}`}>
      {!logoHidden && (
        <NavLink className="link18-logo" to="/">
          <span className="link18-logo--bold">tamaga</span> studio
        </NavLink>
      )}
      <BurgerMenu open={open} setOpen={setOpen} />
      <div className={open ? "nav-links" : "nav-links-toggle"}>
        <NavLink className="link18" onClick={toggle} to="/projects">
          projects
        </NavLink>
        <NavLink className="link18" to="/about" onClick={toggle}>
          about
        </NavLink>
        <NavLink className="link18" to="/contact" onClick={toggle}>
          contact
        </NavLink>
      </div>
    </nav>
  );
};
