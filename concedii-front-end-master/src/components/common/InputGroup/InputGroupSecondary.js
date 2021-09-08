import React from "react";
import styled from "styled-components";
// import classes from "../../../styles/common/InputGroup/InputGroupSecondary.module.css";
import classes from "../../../sass/components/common/InputGroup/InputGroupSecondary.module.sass";

//this input group starts with a label and ends on the same line with an input 2 times the size

const Icon = styled.i`
  background-size: cover;
  position: absolute;
  right: calc(-9.33px + -1rem);
  width: 0.833125rem;
  height: 0.833125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InputGroupSecondary = (props) => {
  return (
    <div className={classes.group}>
      <label {...props.labelProps} htmlFor={props.inputProps.id}>
        {props.labelText}
      </label>

      {props.type === "select" ? (
        <select className={classes.input} {...props.inputProps}>
          {props.options && props.options.map((element) => element)}
        </select>
      ) : (
        <input className={classes.input} {...props.inputProps} />
      )}
      {props.icon && (
        <Icon
          style={{
            backgroundImage: `url(${props.icon})`,
          }}
        ></Icon>
      )}
    </div>
  );
};

export default InputGroupSecondary;
