import React, { useState } from "react";
// import classes from "../../../styles/layout/Page/Header.module.css";
import classes from "../../../sass/layout/Page/Header.module.sass";
import { NavLink } from "react-router-dom";
import ProfileCardComp from "../../Profile/ProfileCardComp";

const activeLinkStyle = {
  backgroundColor: "#9072d1",
  color: "yellow",
};

const Header = () => {
  const [isProfileShown, setProfileShown] = useState(false);

  const showProfileHandler = () => {
    if (isProfileShown) {
      setProfileShown(false);
    } else {
      setProfileShown(true);
    }
  };

  return (
    <>
      <header className={classes["main-header"]}>
        <nav className={classes["main-header__nav"]}>
          <ul className={classes["main-header__nav-links"]}>
            <li>
              <NavLink to="/dashboard" exact activeStyle={activeLinkStyle}>
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeStyle={activeLinkStyle}>
                MY CALENDAR
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeStyle={activeLinkStyle}>
                COMPANY CALENDAR
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeStyle={activeLinkStyle}>
                ABSENCE
              </NavLink>
            </li>
            <li>
              <NavLink to="/compensation" exact activeStyle={activeLinkStyle}>
                COMPENSATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeStyle={activeLinkStyle}>
                REPORTS
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeStyle={activeLinkStyle}>
                USERS
              </NavLink>
            </li>
          </ul>
          <div className={classes["profile-container"]}>
            <button onClick={showProfileHandler}>Profile</button>
            {isProfileShown && <ProfileCardComp />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
