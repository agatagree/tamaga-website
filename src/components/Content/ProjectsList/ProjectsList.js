import { onSnapshot } from "firebase/firestore";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { projectsCollection } from "../../../api/firebaseIndex";
import { useEffect, useState } from "react";
import { Loader } from "../../../utils/Loader.js/Loader";
import { Card } from "../../../utils/Card/Card";

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
    <div className="gallery-wrapper">
      {projects ? (
        <div className=" content-grid-margin40 gallery">
          {projects.map((singleProject) => (
            <div className="gallery-card">
              <Card key={singleProject.id} singleProject={singleProject} gallery/>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
