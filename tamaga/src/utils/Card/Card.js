import { Link } from "react-router-dom";

export const Card = ({ singleProject }) => {
  return (
    <div className="card-container">
      <Link to={`/projects/${singleProject.id}`}>
        <div className="card-overlay">
          <h4 className="H04">{singleProject.title}</h4>
          <h6 className="H07">{singleProject.category}</h6>
        </div>
        <img
          className="card-img"
          src={singleProject.imgCover}
          alt={singleProject.title}
        />
      </Link>
    </div>
  );
};
