import React, { useRef, useState } from "react";
// import classes from "../../../styles/common/InputGroup/InputGroup.module.css";
import classes from "../../../sass/components/common/InputGroup/InputGroup.module.sass";

import eyeIcon from "../../../img/svg/eye-icon.svg";
import eyeIconClosed from "../../../img/svg/eye-icon-close.svg";
import styled from "styled-components";

//input style
const InputElement = styled.input`
  font-family: "Mulish";
  width: 100%;
  border: 1px solid #858585;
  border-radius: 4px;
  padding: 0.5rem 0.7rem;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;

  &:focus {
    outline: none;
  }
`;

const emptyColor = "rgb(245, 186, 200)";
const notEmptyColor = "white";

const InputGroup = (props) => {
  const [isClosed, setClosed] = useState(false);
  const inputRef = useRef();
  //isEmpty
  const isEmpty = props.isEmpty;

  const viewPasswordHandler = () => {
    if (inputRef.current.type === "text") {
      inputRef.current.type = "password";
      setClosed(false);
    } else {
      inputRef.current.type = "text";
      setClosed(true);
    }
  };

  const inputChangeHandler = (event) => {
    props.onChange(event.target.value);
  };

  const inputFocusHandler = () => {
    console.log("Input focused");
    props.onFocus();
  };

  if (props.inputType === "select") {
    return (
      <div className={classes.group}>
        <label
          {...props.labelProps}
          style={
            props.isLeftInputItem
              ? {}
              : props.isRightInputItem
              ? { marginLeft: "1rem" }
              : {}
          }
        >
          {props.labelText}
        </label>
        <select {...props.selectProps} className={classes.select}>
          {props.options.map((element) => {
            return element;
          })}
        </select>
      </div>
    );
  }

  return (
    <div className={classes.group} {...props.props}>
      <div className={classes["flex-row"]}>
        <label
          {...props.labelProps}
          style={
            props.isLeftInputItem
              ? {}
              : props.isRightInputItem
              ? { marginLeft: "1rem" }
              : {}
          }
        >
          {props.labelText}
        </label>

        {props.forgotPassword && (
          <button type="button" className={classes["forgot-password-button"]}>
            Forgot password?
          </button>
        )}
      </div>

      <div className={classes["input-container"]}>
        <InputElement
          ref={inputRef}
          {...props.inputProps}
          onChange={props.onChange ? inputChangeHandler : () => {}}
          onFocus={props.onFocus ? inputFocusHandler : () => {}}
          style={
            props.isLeftInputItem
              ? {
                  marginRight: "1rem",
                  width: "calc(100% - 1rem)",
                  backgroundColor: isEmpty ? emptyColor : notEmptyColor,
                }
              : props.isRightInputItem
              ? {
                  marginLeft: "1rem",
                  width: "calc(100% - 1rem)",
                  backgroundColor: isEmpty ? emptyColor : notEmptyColor,
                }
              : {
                  backgroundColor: isEmpty ? emptyColor : notEmptyColor,
                }
          }
        />
        {props.viewPassword && (
          <button
            style={{
              backgroundImage: isClosed
                ? "url(" + eyeIcon + ")"
                : "url(" + eyeIconClosed + ")",
            }}
            onClick={viewPasswordHandler}
            type="button"
            className={classes["show-password-button"]}
          ></button>
        )}
      </div>
    </div>
  );
};

export default InputGroup;
