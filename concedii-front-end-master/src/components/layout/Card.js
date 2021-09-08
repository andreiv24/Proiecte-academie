import React from "react";
// import classes from "../../styles/layout/Card.module.css";
import classes from "../../sass/layout/Card.module.sass";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
