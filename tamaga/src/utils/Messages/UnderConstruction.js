import { MESSAGE } from "./TextMesseges";

export const UnderConstruction = () => {
  return (
    <div className="message-layout">
      <img
        className="message-img"
        alt="underconstruction"
        src="https://img.freepik.com/premium-vector/construction-website-page-web-page-vector-illustration_123447-3974.jpg?w=826"
      />
      <h6 className="H06">{MESSAGE.underConstruction}</h6>
    </div>
  );
};
