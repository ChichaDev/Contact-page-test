import "./VisitCard.css";

import { Mobile } from "./Mobile";
import { Email } from "./Email";
import { Locations } from "./Locations";

// moved to a separate entity for reuse
export const VisitCard = () => {
  return (
    <div className="visit-card">
      <Mobile />
      <Email />
      <Locations />
    </div>
  );
};
