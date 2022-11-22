import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { projectsCollection } from "../../../api/firebaseIndex";
import { useEffect, useState } from "react";
import { Loader } from "../../../utils/Loader.js/Loader";
import { ImgCard } from "../../../utils/ImgCard/ImgCard";

export const ProjectsList = () => {
  const [projects, setProjects] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    onSnapshot(projectsCollection, (project) => {
      setProjects(getDataFromSnapshot(project));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <div>
      {projects ? (
          <div className=" content-grid-margin40 gallery">
            {projects.map((singleProject) => (
              <div className="gallery-card">
                <ImgCard key={singleProject.id} singleProject={singleProject} />
                <h6 className="H06 projectList-card-title">
                  {singleProject.title}
                </h6>
              </div>
            ))}
          </div>
      ) : (
        <Loader />
      )}

    </div>
  );
};
