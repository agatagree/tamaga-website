import { NavLink } from "react-router-dom";

export const UiKit = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ margin: "10px" }}>Buttons</h2>
        <div>
          <h4 style={{ margin: "10px" }}>Buttons primary</h4>
          <button
            style={{ display: "inline-block", margin: "10px" }}
            className="btn-primary-sm-default"
          >
            Button
          </button>
          <button
            style={{ display: "inline-block", margin: "10px" }}
            className="btn-primary-lg-default"
          >
            Button
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ margin: "10px" }}>Links</h2>
        <div>
          <h4 style={{ margin: "10px" }}>Links primary</h4>
          <NavLink
            style={{ display: "inline-block", margin: "10px" }}
            className="link14"
          >
            Link
          </NavLink>
          <NavLink
            style={{ display: "inline-block", margin: "10px" }}
            className="link18"
          >
            Link
          </NavLink>
          <NavLink
            style={{ display: "inline-block", margin: "10px" }}
            className="link24"
          >
            Link
          </NavLink>
          <NavLink
            style={{ display: "inline-block", margin: "10px" }}
            className="link24-t"
          >
            Link
          </NavLink>
          <NavLink
            style={{ display: "inline-block", margin: "10px" }}
            className="link48-t"
          >
            Link
          </NavLink>
        </div>
      </div>
    </>
  );
};
