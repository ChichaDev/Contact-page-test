import "./Mobile.css";

import Phone from "../../assets/img/phone-call.svg";

export const Mobile = () => {
  return (
    <div className="contact-mobile">
      <img src={Phone} alt="mobile number" className="mobile-number" />
      <a href="10123456789">+1012 3456 789</a>
    </div>
  );
};
