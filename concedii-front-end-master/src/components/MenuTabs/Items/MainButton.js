import React from "react";
// import '../../../App.css';
// import "./Buttons.css";

import classes from "../../../sass/components/MenuTabs/Items/Buttons.module.sass";

const MainButton = (props) => {
  const className = `${classes.button} ${classes[props.type]}`;
  return (
    <>
      <button className={className}>{props.buttonName}</button>
    </>
  );
};

export default MainButton;
