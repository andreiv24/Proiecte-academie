import React from "react";
// import classes from "../../../styles/common/Buttons/Button.module.css";
import classes from "../../../sass/components/common/Buttons/Button.module.sass";

const Button = (props) => {
  const buttonClass =
    props.buttonType === "full"
      ? "full-button"
      : props.buttonType === "tertiary"
      ? "tertiary"
      : "empty-button";

  // console.log(buttonClass);

  return (
    <button
      className={`${classes[buttonClass]} ${
        props.tertiaryColor === "blue" && classes["tertiary-blue"]
      }`}
      {...props.buttonProps}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
