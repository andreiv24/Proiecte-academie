import React from "react";
// import classes from "../../styles/Compensation/UserCount.module.css";
import classes from "../../sass/components/Compensation/UserCount.module.sass";

const UserCount = (props) => {
  const iconStyle = {
    margin: "0 0.75rem",
    backgroundImage: `url(${props.icon})`,
    backgroundSize: "cover",
    width: "1rem",
    height: "1rem",
  };

  return (
    <div className={classes.container}>
      <span className={classes.count}>{props.count}</span>
      <i style={iconStyle}></i>
      <span className={classes.text}>{props.text}</span>
    </div>
  );
};

export default UserCount;
