import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Card } from "../../../utils/Card/Card";
import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDataFromSnapshot } from "../../../api/firebaseGetData";
import { projectsCollection } from "../../../api/firebaseIndex";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1280: { items: 3 },
  1600: { items: 4 },
};

export const SliderGallery = () => {
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
    <>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
      >
        {projects.length ? (
          projects.map((singleProject) => (
            <Card key={singleProject.id} singleProject={singleProject} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </AliceCarousel>
    </>
  );
};
