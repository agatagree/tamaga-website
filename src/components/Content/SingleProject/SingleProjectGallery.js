export const SingleProjectGallery = ({ project }) => {
  return (
    <>
      {project.img.map((slide, index) => (
        <swiper-slide key={index}>
          <img src={slide} alt={project.title} />
        </swiper-slide>
      ))}
    </>
  );
};
