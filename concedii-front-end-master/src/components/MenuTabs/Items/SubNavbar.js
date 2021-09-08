import React from "react";
import Labels from "./Labels";
// import close from "../../../resources/imgs/close.svg";
import close from "../../../img/svg/menu-tabs/close.svg";
import classes from "../../../sass/components/MenuTabs/MenuTabs.module.sass";

const SubNavbar = () => {
  return (
    <div className={classes["up-row"]}>
      <Labels type="uprowlabel" label="Overview" />
      <div>
        <img className={classes["close"]} src={close} alt="img" />
      </div>
    </div>
  );
};

export default SubNavbar;
