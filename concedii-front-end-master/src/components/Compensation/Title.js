import React from "react";
// import classes from "../../styles/Compensation/Title.module.css";
import classes from "../../sass/components/Compensation/Title.module.sass";

const Title = (props) => {
  return (
    <div className={classes["title-buttons"]} {...props.props}>
      <p className={classes.title}>{props.text}</p>
      <div className={classes.leftSide} {...props.leftSideProps}>
        {props.children}
      </div>
    </div>
  );
};

export default Title;
