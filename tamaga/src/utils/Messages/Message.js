import { useEffect, useState } from "react";
import { Loader } from "../Loader.js/Loader";

const messageType = {
  pageNotFound: {
    text: "Ups! page not found",
    img: "https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=996&t=st=1665684552~exp=1665685152~hmac=ac9bf94fac80e1abda4518b89b42c3cfc6658bcfce715107555da20cd55f4ea7",
    alt: "page not found",
  },
  underConstruction: {
    text: "Sorry, page under construction",
    img: "https://img.freepik.com/premium-vector/construction-website-page-web-page-vector-illustration_123447-3974.jpg?w=826",
    alt: "website underconstruction",
  },
};

export const Message = ({ message }) => {
  const [messageValue, setMessageValue] = useState({});

  useEffect(() => {
    if (message === "underConstruction") {
      setMessageValue({
        text: messageType.underConstruction.text,
        img: messageType.underConstruction.img,
        alt: messageType.underConstruction.alt,
      });
    } else {
      setMessageValue({
        text: messageType.pageNotFound.text,
        img: messageType.pageNotFound.img,
        alt: messageType.pageNotFound.alt,
      });
    }
  }, [message]);

  const DisplayMessage = ({ messageValue }) => {
    return (
      <div className="message-layout">
        <img
          className="message-img"
          alt={messageValue.alt}
          src={messageValue.img}
        />
        <h6 className="H06">{messageValue.text}</h6>
      </div>
    );
  };

  return (
    <>
      {messageValue ? (
        <DisplayMessage messageValue={messageValue} />
      ) : (
        <Loader />
      )}
    </>
  );
};
