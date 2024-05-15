import { Link } from "react-router-dom";
import { clsx } from "clsx";

export const Card = ({ singleProject, gallery }) => {
  return (

    <div className={clsx("card-container", gallery && "card-container-img")}>
      <Link to={`/projects/${singleProject.id}`}>
        <div className="card-overlay">
          <h4 className="H04--gallery-card">{singleProject.title}</h4>
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

