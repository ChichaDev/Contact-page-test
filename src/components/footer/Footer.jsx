import "./Footer.css";

import { Subscribe } from "../subscribe/Subscribe";
import { Email } from "../visitCard/Email";
import { Mobile } from "../visitCard/Mobile";
import { Locations } from "../visitCard/Locations";
import { Company } from "./company/Company";
import { Legal } from "./legal/Legal";
import { QuickLinks } from "./quickLinks/QuickLinks";

// declarative component approach allows you to reuse entities in the footer,
//  grouping using the flex model
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo">
          <p>Logo Here</p>
        </div>
        <div className="content-footer">
          <div className="visit-card-block">
            <h3>Reach us</h3>
            <Mobile />
            <Email />
            <Locations />
          </div>
          <div className="navigation-links">
            <Company />
            <Legal />
            <QuickLinks />
          </div>
          <Subscribe />
        </div>
      </div>
    </footer>
  );
};
