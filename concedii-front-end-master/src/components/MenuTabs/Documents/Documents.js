import React from "react";

import SecondButton from "../Items/SecondButton";
import save from "../../../img/svg/menu-tabs/save.svg";
import bin from "../../../img/svg/menu-tabs/bin.svg";

// import save from "../../resources/imgs/save.svg";
// import bin from "../../resources/imgs/bin.svg";

// import "./Documents.css";
import classes from "../../../sass/components/MenuTabs/Documents/Documents.module.sass";

const Documents = () => {
  return (
    <div className={classes["square"]}>
      <div className={classes["top-group"]}>
        <div className={classes["first-group"]}>
          <SecondButton type="second-primary-house" buttonName />
          <span className={classes["or-span"]}>/</span>
          <SecondButton type="second-primary" buttonName="Other" />
        </div>
        <div className={classes["second-group"]}>
          <SecondButton type="second-sortby" buttonName="Sort by" />
        </div>
      </div>
      <div className={classes["big-square"]}>
        <div className={classes["first-p"]}>
          <img className={classes["bin"]} src={bin} alt="img" />
        </div>
        <div className={classes["second-p"]}>
          <img className={classes["save"]} src={save} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Documents;
