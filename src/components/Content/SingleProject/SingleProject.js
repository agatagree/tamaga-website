import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { Loader } from "../../../utils/Loader.js/Loader";
import { useParams } from "react-router-dom";
import { singleProject } from "../../../api/firebaseIndex";

export const SingleProject = () => {
  const [project, setProject] = useState({});
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const docRef = singleProject(id);
    const unsubsribe = onSnapshot(docRef, (doc) => {
      setProject(doc.data());
      setLoad(true);
    });
    return unsubsribe;
  }, [id, load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <>
      {project ? (
        <div className="content-wrapper--column">
          <div className="content-grid-margin40">
            <div className="content-half-left-big-full">
              <h6 className="H06">{project.title}</h6>
              <p className="H07">{project.category}</p>
            </div>
            <div className="single-project-description">
              <p className="body-text">{project.description}</p>
            </div>
          </div>
          <div className="single-project-gallery-section">
            {" "}
            <img
              className="card-img"
              src={project.img[0]}
              alt={project.title}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
