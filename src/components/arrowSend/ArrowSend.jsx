import "./ArrowSend.css";

import Arrow from "../../assets/img/arrow-send.svg";

// the image is moved to a separate component for reuse
export const ArrowSend = () => {
  return <img src={Arrow} alt="arrow send" className="arrow-send" />;
};
