import { NavLink } from "react-router-dom";

export const MobileMenu = ({open, setOpen}) => {
  return (
    <div className="mobile-menu">
        <NavLink className="link18-logo" to="/" onClick={() => setOpen(!open)}>
          <span className="link18-logo--bold">tamaga</span> studio
        </NavLink>

      <div className="mobile-nav">
        <NavLink
          className="link24-t"
          onClick={() => setOpen(!open)}
          to="/projects"
        >
          projects
        </NavLink>
        <NavLink
          className="link24-t"
          to="/about"
          onClick={() => setOpen(!open)}
        >
          about
        </NavLink>
        <NavLink
          className="link24-t"
          to="/contact"
          onClick={() => setOpen(!open)}
        >
          contact
        </NavLink>
      </div>
    </div>
  )
}