import { useEffect, useState } from "react";
import { onSnapshot, query, where } from "firebase/firestore";
import { projectsCollection } from "../../../../api/firebaseIndex";
import { getDataFromSnapshot } from "../../../../api/firebaseGetData";
import { Loader } from "../../../../utils/Loader.js/Loader";
import { Card } from "../../../../utils/Card/Card";
import { NavLink } from "react-router-dom";

export const Offer = () => {
  const [projects, setProjects] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const queryRequest = query(
      projectsCollection,
      where("isPromotedProject", "==", true)
    );
    const unsubscribe = onSnapshot(queryRequest, (project) => {
      setProjects(getDataFromSnapshot(project));
      console.log(project);
      setLoad(true);
    });
    return unsubscribe;
  }, [load]);

  if (!load) {
    return <Loader />;
  }

  return (
    <div className="content-grid-margin40">
      <h3 className="H03 section-wrapper">
        <span className="H03--bold">tamaga</span> studio is interdisciplinary
        design office based in Poland. We deal with diffrent scales of
        <span className="H03--bold"> architecture</span> and
        <span className="H03--bold"> digital design</span> in a creative and
        user focused way.
      </h3>

      <div className="content-half-left-big">
        <div className="promoted-project-wrapper">
          <Card key={projects[0].id} singleProject={projects[0]} />
          <NavLink
            to="/projects"
            className="link14 promoted-project-wrapper-mobile"
          >
            See more works
          </NavLink>
        </div>
      </div>
      <div className="content-half-right-big">
        <div className="promoted-project-wrapper-down">
          <Card key={projects[1].id} singleProject={projects[1]} />
          <NavLink
            to="/projects"
            className="link14 promoted-project-wrapper-down-web"
          >
            See more works
          </NavLink>
        </div>
      </div>

      <div className="content-half-left-small content-margin-180">
        <h4 className="H04--bold content-half-title">Read about us</h4>
        <h6 className="H06">Land art of the 21st century. Fly Ranch</h6>
        <p className="body-text content-half-text">
          “A spiral and colourful earth wall surrounds a secret orchard, leading
          to a centralwater and energy collector. Source is a contemporary
          desert hortus conclusus where low-tech knowledge mixes with modern
          technology and ancients art.<br></br>
          <br></br> The fourteenth-century strategy of fruits walls emerged long
          before the invention of the energy-consuming glasshouses of the
          nineteenth century. By planting trees within ptotective masonery walls
          with high thermal mass capabilities, the stored heat of the sun is
          released through the night.
        </p>
        <a
          className="link16 press-read-more"
          href="https://landartgenerator.org/blagi/archives/77544"
        >
          Read more
        </a>
      </div>
      <div className="content-half-right-big content-margin-180">
        <img
          className="main-press-img"
          src="https://firebasestorage.googleapis.com/v0/b/tamaga-website.appspot.com/o/projects%2Fsor-publication-cover.jpg?alt=media&token=2a484329-1c13-4c3c-9fb3-e6564ed48497"
          alt="source publication"
        />
      </div>
    </div>
  );
};
