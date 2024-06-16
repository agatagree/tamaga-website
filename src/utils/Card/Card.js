import { Link } from "react-router-dom";
import { clsx } from "clsx";

export const Card = ({
  gallery,
  isOverlay,
  path,
  title,
  category,
  projectId,
}) => {
  return (
    <div className={clsx("card-container", gallery && "card-container-img")}>
      <Link to={`/projects/${projectId}`}>
        {isOverlay && (
          <div className="card-overlay">
            <h4 className="H04--gallery-card">{title}</h4>
            <h6 className="H07">{category}</h6>
          </div>
        )}
        <img className="card-img" src={path} alt={title} />
      </Link>
    </div>
  );
};
