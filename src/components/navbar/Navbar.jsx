import { useState } from "react";

import "./Navbar.css";

import { NavbarMobile } from "./NavbarMobile";

import { ReactComponent as CartLogo } from "../../assets/img/cart.svg";
import { ReactComponent as ProfileLogo } from "../../assets/img/profile.svg";

import DownArrow from "../../assets/img/down-arrow.svg";
import SmartphoneMenu from "../../assets/img/ci_menu-alt-01.svg";

// the navigation menu is rendered as a separate entity and is simply imported into the header,
//  it can also be reused throughout the application
export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <b>Logo Here</b>
        </a>
        <div className="wrapper-navigate">
          <div className="navigate">
            <ul>
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
          </div>
          <div className="navigate-icons">
            <div className="profile-logo-wrapper">
              <ProfileLogo className="profile-logo" />
            </div>
            <div className="cart-logo-wrapper">
              <CartLogo className="cart-logo" />
            </div>
          </div>
        </div>
        <div onClick={() => setIsActive(true)}>
          <img
            src={SmartphoneMenu}
            alt="smartphone menu"
            className="smartphone-menu"
          />
        </div>
      </nav>

      {/* Smartphone screen menu component */}
      <NavbarMobile isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
