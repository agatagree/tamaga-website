import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink className="link18-logo" to="/">
        <span style={{fontWeight: "700"}}>tamaga</span> studio
      </NavLink>
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
