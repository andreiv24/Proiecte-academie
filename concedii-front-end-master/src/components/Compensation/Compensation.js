import React from "react";
// import classes from "../../styles/Compensation/Compensation.module.css";
import classes from "../../sass/components/Compensation/Compensation.module.sass";

import CompensationTitle from "./CompensationTitle";
import CompensationCycle from "./CompensationCycle";
import CompensationList from "./CompensationList";

const Compensation = () => {
  return (
    <div className={classes["main-container"]}>
      <CompensationTitle />

      <div className={classes.main}>
        <CompensationCycle />
        <CompensationList />
      </div>
    </div>
  );
};

export default Compensation;
