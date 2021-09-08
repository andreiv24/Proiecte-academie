import React, { useState } from "react";
import classes from "../../sass/components/Auth/AuthForm.module.sass";
import InputGroup from "../common/InputGroup/InputGroup";
import Button from "../common/Buttons/Button";

import { EMAIL, PASSWORD } from "../../hooks/useAuthentication";

import useAuthentication from "../../hooks/useAuthentication";

const AuthForm = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  //if the email or password fields are empty
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);

  const [checkValidity, setEmailTouched, setPasswordTouched] =
    useAuthentication(emailInputValue, passwordInputValue);

  //default props for label and input field
  const labelProps = {};
  const inputProps = { type: "text", autoComplete: "off" };

  //
  // EMAIL
  //
  const onEmailChangeHandler = (newValue) => {
    setEmailInputValue(newValue);

    //checks if the email input is empty or not
    setEmailEmpty(checkValidity(EMAIL, newValue));
  };

  const onEmailFocusHandler = () => {
    setEmailTouched(true);

    setEmailEmpty(checkValidity(EMAIL, emailInputValue, true));
  };

  //
  // PASSWORD
  //
  const onPasswordChangeHandler = (newValue) => {
    setPasswordInputValue(newValue);

    //checks if the email input is empty or not
    setPasswordEmpty(checkValidity(PASSWORD, newValue));
  };

  const onPasswordFocusHandler = () => {
    setPasswordTouched(true);

    setPasswordEmpty(checkValidity(PASSWORD, passwordInputValue, true));
  };

  return (
    <div className={classes["form-container"]}>
      <form className={classes["form-container__form"]}>
        <p className={classes.title}>Login to your account</p>

        <InputGroup
          labelText={"Email"}
          labelProps={{
            ...labelProps,
            htmlFor: "email",
          }}
          inputProps={{
            ...inputProps,
            id: "email",
            placeholder: "Email",
          }}
          onChange={onEmailChangeHandler}
          onFocus={onEmailFocusHandler}
          value={emailInputValue}
          isEmpty={isEmailEmpty}
        />

        <InputGroup
          labelText={"Password"}
          forgotPassword={true}
          viewPassword={true}
          labelProps={{
            ...labelProps,
            htmlFor: "password",
          }}
          inputProps={{
            ...inputProps,
            id: "password",
            type: "password",
            placeholder: "Password",
          }}
          onChange={onPasswordChangeHandler}
          onFocus={onPasswordFocusHandler}
          value={passwordInputValue}
          isEmpty={isPasswordEmpty}
        />

        <Button
          buttonType="full"
          buttonText="LOG IN"
          buttonProps={{
            type: "submit",
          }}
        />
        {/* 
        <Button
          buttonType="empty"
          buttonText="Create account"
          buttonProps={{
            type: "submit",
          }}
        /> */}

        {/* <p className={classes.or}>or</p> */}
      </form>
    </div>
  );
};

export default AuthForm;
