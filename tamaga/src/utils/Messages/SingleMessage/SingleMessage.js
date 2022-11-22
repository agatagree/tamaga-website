import { useState } from "react";
import Cross from "../../../assets/Cross.svg";
import Success from "../../../assets/Success.svg";
import { MESSAGE } from "../TextMesseges";

const messageState = [
  {
    state: "success",
    text: MESSAGE.success,
    iconPath: Success,
  },
  {
    state: "error",
    text: MESSAGE.error,
    iconPath: Cross,
  },
]

export const SingleMessage = ({ state }) => {
  const [visible, setVisible] = useState(true);
  const activeMessage = messageState.find(obj => {
    return obj.state === state;
  });

  return (
    <div className={visible ? `${state} message` : "nonVisible"}>
      <div className="message-info">
        <img src={activeMessage.iconPath} alt={state} />
        <p className="body-text-sm">{activeMessage.text}</p>
      </div>
      <button className="close-btn" onClick={()=> setVisible(false)}>
        <img src={Cross} alt="close" />
      </button>
    </div>
  );
};
