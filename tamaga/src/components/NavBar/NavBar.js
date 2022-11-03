import { NavLink } from "react-router-dom";

export const NavBar = ({ logoHidden }) => {
  return (
    <nav className={`${logoHidden ? "nav-hidden" :"nav-full"}`}>
      {!logoHidden && (
        <NavLink className="link18-logo" to="/">
          <span className="link18-logo--bold">tamaga</span> studio
        </NavLink>
      )}
      <div className="nav-links">
        <NavLink className="link18" to="/projects">
          projects
        </NavLink>
        <NavLink className="link18" to="/about">
          about
        </NavLink>
        <NavLink className="link18" to="/contact">
          contact
        </NavLink>
      </div>
    </nav>
  );
};
