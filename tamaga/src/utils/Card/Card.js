import { Link } from "react-router-dom";

export const Card = ({ singleProject }) => {
  console.log(`${singleProject.id}`)
  return (
    <div className="card-container">
      <Link to={`/projects/${singleProject.id}`}>
        <div className="card-overlay">
          <h4 className="H04">{singleProject.title}</h4>
          <h7 className="H07">{singleProject.category}</h7>
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
