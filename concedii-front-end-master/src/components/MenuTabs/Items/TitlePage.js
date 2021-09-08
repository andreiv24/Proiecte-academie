import React from "react";
// import "./TitlePage.css";

import classes from "../../../sass/components/MenuTabs/Items/TitlePage.module.sass";

const TitlePage = (props) => {
  const className = `${classes.p} ${classes[props.type]}`;
  return (
    <>
      <p className={className}>{props.title}</p>
    </>
  );
};

export default TitlePage;
