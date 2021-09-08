import React from "react";
// import classes from "../../styles/Compensation/CompensationTitle.module.css";
import classes from "../../sass/components/Compensation/CompensationTitle.module.sass";

import Button from "../common/Buttons/Button";

const CompensationTitle = (props) => {
  return (
    <div className={classes["main-title-container"]}>
      <p className={classes["main-title"]}> Compensate work and overtime</p>
      <Button
        buttonText="+ New Compensation"
        props={{}}
        buttonType={"tertiary"}
      />
    </div>
  );
};

export default CompensationTitle;
