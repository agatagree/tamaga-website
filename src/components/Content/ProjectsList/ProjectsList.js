import { onSnapshot, query, orderBy } from "firebase/firestore";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { projectsCollection } from "../../../api/firebaseIndex";
import { useEffect, useState } from "react";
import { Loader } from "../../../utils/Loader.js/Loader";
import { Card } from "../../../utils/Card/Card";

export const ProjectsList = () => {
  const [projects, setProjects] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const q = query(projectsCollection, orderBy("orderNumber"));
    const unsubsribe = onSnapshot(q, (project) => {
      setProjects(getDataFromSnapshot(project));
      setLoad(true);
    });
    return unsubsribe;
  }, [load]);

  if (load === false) {
    return <Loader />;
  }

  return (
    <div className="content-wrapper">
      {projects ? (
        <div className="content-grid-margin40 gallery">
          {projects.map((singleProject) => (
            <div className="gallery-card" key={singleProject.id}>
              <Card singleProject={singleProject} gallery />
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
