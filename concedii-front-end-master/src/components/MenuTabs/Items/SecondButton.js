import React from "react";
// import "./Buttons.css";

import classes from "../../../sass/components/MenuTabs/Items/Buttons.module.sass";

const SecondButton = (props) => {
  const className = `${classes.button} ${classes[props.type]}`;
  return (
    <>
      <button className={className}>{props.buttonName}</button>
    </>
  );
};

export default SecondButton;
