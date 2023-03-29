import "./Locations.css";

import LocationAddress from "../../assets/img/location.svg";

export const Locations = () => {
  return (
    <div className="contact-locations">
      <img
        src={LocationAddress}
        alt="address city"
        className="locations-contact"
      />
      <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
    </div>
  );
};
