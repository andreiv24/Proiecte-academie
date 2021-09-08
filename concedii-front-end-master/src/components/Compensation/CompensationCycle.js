import React from "react";
// import classes from "../../styles/Compensation/CompensationCycle.module.css";
import classes from "../../sass/components/Compensation/CompensationCycle.module.sass";

import CompensationCycleCurrent from "./CompensationCycleCurrent";
import CompensationCycleForm from "./CompensationCycleForm";
import CompensationCycleTitle from "./CompensationCycleTitle";
import CompensationCycleUsers from "./CompensationCycleUsers";

const CompensationCylce = (props) => {
  return (
    <div className={classes.container}>
      <CompensationCycleTitle />
      <CompensationCycleForm />
      <CompensationCycleUsers />
      <CompensationCycleCurrent />
    </div>
  );
};

export default CompensationCylce;
