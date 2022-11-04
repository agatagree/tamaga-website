import { Card } from "../../../utils/Card/Card";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { projectsCollection } from "../../../api/firebaseIndex";

export const Slider = () => {
  const [projects, setProjects] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    onSnapshot(projectsCollection, (project) => {
      setProjects(getDataFromSnapshot(project));
      setLoad(true);
    });
  }, [load]);

  if (load === false) {
    return <p>loading...</p>;
  }

  return (
    <div className="projects-slider">
      {projects.length ? (
        projects.map(singleProject => (
          <Card key={singleProject.id} singleProject={singleProject} />
        ))
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
