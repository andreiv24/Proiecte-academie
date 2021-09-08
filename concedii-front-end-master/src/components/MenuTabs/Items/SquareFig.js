import React from "react";
// import "./SquareFig.css";

import classes from "../../../sass/components/MenuTabs/Items/SquareFig.module.sass";

const SquareFig = (props) => {
  const className = `${classes.div} ${classes[props.type]}`;
  return <div className={className}>{props.label}</div>;
};

export default SquareFig;
