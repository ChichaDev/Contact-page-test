import "./Navbar.css";

import { ReactComponent as CartLogo } from "../../assets/img/cart.svg";
import { ReactComponent as ProfileLogoMobile } from "../../assets/img/profile-mobile.svg";

import CloseIcon from "../../assets/img/akar-icons_cross.svg";
import DownArrow from "../../assets/img/down-arrow.svg";

export const NavbarMobile = ({ isActive, setIsActive }) => {
  return (
    <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
      <div className="mobile-menu-header">
        <div className="logo">
          <a href="#">
            <b>Logo Here</b>
          </a>
        </div>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src={CloseIcon} alt="close icon" />
        </div>
      </div>

      <ul className="menu-items">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <div className="wrapper-features">
            <a href="#">Features</a>
            <img src={DownArrow} alt="down-arrow" />
          </div>
        </li>

        <li>
          <a href="#">Blog</a>
        </li>

        <li>
          <a href="#">Shop</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">
            <b>Contact</b>
          </a>
        </li>
      </ul>

      <div className="navigate-icons-mobile">
        <div className="profile-logo-mobile-wrapper">
          <ProfileLogoMobile className="profile-logo-mobile" />
        </div>
        <div className="cart-logo-mobile-wrapper">
          <CartLogo className="cart-logo" />
        </div>
      </div>
    </div>
  );
};
