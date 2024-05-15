export const ImgCard = ({ singleProject }) => {
  return (
    <div className="img-card-container">
        <img
          className="card-img"
          src={singleProject.imgCover}
          alt={singleProject.title}
        />
    </div>
  );
};
