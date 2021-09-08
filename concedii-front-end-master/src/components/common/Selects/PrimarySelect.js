import React from "react";
// import classes from "../../../styles/common/Selects/PrimarySelect.module.css";
import classes from "../../../sass/components/common/Selects/PrimarySelect.module.sass";

// import arrowDown from "../../../img/svg/dashboard/arrow-down.svg";
import arrowDown from "../../../img/svg/dashboard/arrow-down.svg";

const PrimarySelect = (props) => {
  return (
    <div className={classes.container} {...props.props}>
      <div className={classes["text"]}>Approval</div>
      <div
        className={classes.arrow}
        style={{
          backgroundImage: `url(${arrowDown})`,
          width: "12px",
          height: "7.41px",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default PrimarySelect;
