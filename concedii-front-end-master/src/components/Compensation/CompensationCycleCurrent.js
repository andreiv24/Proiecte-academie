import React from "react";
// import classes from "../../styles/Compensation/CompensationCycleCurrent.module.css";
import classes from "../../sass/components/Compensation/CompensationCycleCurrent.module.sass";

import Title from "./Title";
import InputGroupSecondary from "../common/InputGroup/InputGroupSecondary";
import Message from "../common/Messages/Message";

const CompensationCylceCurrent = (props) => {
  return (
    <div className={classes.container}>
      <Title text={"CURRENT CYCLE"} />
      <InputGroupSecondary
        labelText="8 days remaining"
        labelProps={{}}
        inputProps={{
          id: "cycle",
          style: {
            width: "11.75rem",
          },
        }}
        type="select"
        options={[<option>Most Overtime</option>]}
      />
      <div className={classes.separator}></div>
      <Message text="No entries" />
    </div>
  );
};

export default CompensationCylceCurrent;
