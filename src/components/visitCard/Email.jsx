import "./Email.css";

import EmailAddress from "../../assets/img/email.svg";

export const Email = () => {
  return (
    <div className="contact-email">
      <img src={EmailAddress} alt="email address" className="email-address" />
      <a href="demo@gmail.com">demo@gmail.com</a>
    </div>
  );
};
