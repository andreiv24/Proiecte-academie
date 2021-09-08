import React from "react";
// import classes from "../../styles/Compensation/CompensationList.module.css";
import classes from "../../sass/components/Compensation/CompensationList.module.sass";

import Title from "./Title";
import Message from "../common/Messages/Message";

const CompensationList = (props) => {
  return (
    <div className={classes.container}>
      <Title text="ALL COMPENSATION" />
      <Message text="No entries" />
    </div>
  );
};

export default CompensationList;
