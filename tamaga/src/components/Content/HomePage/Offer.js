import { useState } from "react";
import { Link } from "react-router-dom";
import { SliderGallery } from "./Slider";

export const Offer = () => {
  return (
    <div className="main-content">
      <h3 className="H03 section-wrapper">
        <span className="H03--bold">tamaga</span> studio is interdisciplinary
        design office based in Poland. We deal with diffrent scales of
        <span className="H03--bold"> architecture</span> and
        <span className="H03--bold"> digital design</span> in a creative and
        user focused way.
      </h3>
      <div className="slider-wrapper">
        <SliderGallery />
      </div>
      <h4 className="H04--bold main-press">Read about us</h4>
      <div className="main-press-text">
        <h6 className="H06">Land art of the 21st century. Fly Ranch</h6>
        <p className="body-text main-press-description">
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
      <div className="main-press-image">
        <img
          className="main-press-img"
          src="https://firebasestorage.googleapis.com/v0/b/tamaga-website.appspot.com/o/projects%2Fsor-publication-2.jpg?alt=media&token=4ddeff14-9638-4ebd-a0ae-8c901c9c24fb"
          alt="source publication"
        />
      </div>
    </div>
  );
};
