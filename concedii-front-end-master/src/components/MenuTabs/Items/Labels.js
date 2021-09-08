import React from "react";
// import "./Labels.css";

import classes from "../../../sass/components/MenuTabs/Items/Labels.module.sass";

const Labels = (props) => {
  const className = `${classes.p} ${classes[props.type]}`;
  return (
    <>
      <p className={className}>{props.label}</p>
    </>
  );
};

export default Labels;
