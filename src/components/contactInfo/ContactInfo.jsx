import { ReactComponent as Twitter } from "../../assets/img/twitter.svg";
import { ReactComponent as Discord } from "../../assets/img/discord.svg";
import { ReactComponent as Instagram } from "../../assets/img/instagram.svg";

import { VisitCard } from "../visitCard/VisitCard";
import EllipseTwo from "../../assets/img/ellipse 794.svg";

import "./ContactInfo.css";

// division into entities that can be reused such as a business card or social networks,
// use ReactComponent for painting svg images,
//grouping by blocks of content
export const ContactInfo = () => {
  return (
    <section className="container-info">
      <div className="header-info">
        <div className="contact-title">
          <h2>Contact Information</h2>
        </div>
        <div className="contact-description">
          <p>Say something to start a live chat!</p>
        </div>
      </div>
      <VisitCard />
      <div className="footer-container">
        <div className="social-network">
          <div>
            <Twitter className="twitter" />
          </div>
          <div>
            <Instagram className="instagram" />
          </div>
          <div>
            <Discord className="discord" />
          </div>
        </div>
        <div>
          <div className="ellipse"></div>
          <img src={EllipseTwo} alt="ellipse two img" className="ellipse-two" />
        </div>
      </div>
    </section>
  );
};
