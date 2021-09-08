import React, { useState } from "react";
// import classes from "../../styles/Registration/RegisterForm.module.css";
import classes from "../../sass/components/Registration/RegisterForm.module.sass";

import Button from "../common/Buttons/Button";
import InputGroup from "../common/InputGroup/InputGroup";

import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  // PASSWORD,
  // PASSWORD_AGAIN,
} from "../../hooks/useRegistration";

import useRegistration from "../../hooks/useRegistration";

const RegisterForm = () => {
  const [firstNameInputValue, setFirstNameInputValue] = useState("");
  const [lastNameInputValue, setLastNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  // const [passwordInputValue, setPasswordInputValue] = useState("");
  // const [passwordAgainInputValue, setPasswordAgainInputValue] = useState("");

  //if the email or password fields are empty
  const [isFirstNameEmpty, setFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setLastNameEmpty] = useState(false);
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  // const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  // const [isPasswordAgainEmpty, setPasswordAgainEmpty] = useState(false);

  const [
    checkValidity,
    setFirstNameTouched,
    setLastNameTouched,
    setEmailTouched,
    // setPasswordTouched,
    // setPasswordAgainTouched,
  ] = useRegistration();

  const onFirstNameChangeHandler = (newValue) => {
    setFirstNameInputValue(newValue);
    setFirstNameEmpty(checkValidity(FIRST_NAME, newValue));
  };
  const onFirstNameFocusHandler = () => {
    setFirstNameTouched(true);

    setFirstNameEmpty(checkValidity(FIRST_NAME, firstNameInputValue, true));
  };

  //
  // Last name
  //
  const onLastNameChangeHandler = (newValue) => {
    setLastNameInputValue(newValue);
    setLastNameEmpty(checkValidity(LAST_NAME, newValue));
  };
  const onLastNameFocusHandler = () => {
    setLastNameTouched(true);

    setLastNameEmpty(checkValidity(LAST_NAME, lastNameInputValue, true));
  };

  //
  // Email
  //
  const onEmailChangeHandler = (newValue) => {
    setEmailInputValue(newValue);
    setEmailEmpty(checkValidity(EMAIL, newValue));
  };
  const onEmailFocusHandler = () => {
    setEmailTouched(true);

    setEmailEmpty(checkValidity(EMAIL, emailInputValue, true));
  };

  //
  // Password
  //
  // const onPasswordChangeHandler = (newValue) => {
  //   setPasswordInputValue(newValue);
  //   setPasswordEmpty(checkValidity(PASSWORD, newValue));
  // };
  // const onPasswordFocusHandler = () => {
  //   setPasswordTouched(true);

  //   setPasswordEmpty(checkValidity(PASSWORD, passwordInputValue, true));
  // };

  //
  // Password again
  //
  // const onPasswordAgainChangeHandler = (newValue) => {
  //   setPasswordAgainInputValue(newValue);
  //   setPasswordAgainEmpty(checkValidity(PASSWORD_AGAIN, newValue));
  // };
  // const onPasswordAgainFocusHandler = () => {
  //   setPasswordAgainTouched(true);

  //   setPasswordAgainEmpty(
  //     checkValidity(PASSWORD_AGAIN, passwordAgainInputValue, true)
  //   );
  // };

  const labelProps = {};

  const inputProps = {
    type: "text",
    autoComplete: "off",
  };

  return (
    <div className={classes["form-container"]}>
      <form className={classes["form-container__form"]}>
        <p className={classes.title}>Create account</p>

        <div className={classes["flex-row"]}>
          <InputGroup
            labelText={"First name *"}
            labelProps={{
              ...labelProps,
              htmlFor: "firstName",
            }}
            inputProps={{
              ...inputProps,
              id: "firstName",
              placeholder: "First Name",
            }}
            onChange={onFirstNameChangeHandler}
            onFocus={onFirstNameFocusHandler}
            value={firstNameInputValue}
            isEmpty={isFirstNameEmpty}
            isLeftInputItem={true}
          />

          <InputGroup
            labelText={"Last Name *"}
            labelProps={{
              ...labelProps,
              htmlFor: "lastName",
            }}
            inputProps={{
              ...inputProps,
              id: "lastName",
              placeholder: "Last Name",
            }}
            onChange={onLastNameChangeHandler}
            onFocus={onLastNameFocusHandler}
            value={lastNameInputValue}
            isEmpty={isLastNameEmpty}
            isRightInputItem={true}
          />
        </div>

        <InputGroup
          labelText={"Email *"}
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

        {/* <InputGroup
          labelText={"Password"}
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

        <InputGroup
          labelText={"Password again"}
          viewPassword={true}
          labelProps={{
            ...labelProps,
            htmlFor: "passwordAgain",
          }}
          inputProps={{
            ...inputProps,
            id: "passwordAgain",
            type: "password",
            placeholder: "Password again",
          }}
          onChange={onPasswordAgainChangeHandler}
          onFocus={onPasswordAgainFocusHandler}
          value={passwordAgainInputValue}
          isEmpty={isPasswordAgainEmpty}
        /> */}

        <InputGroup
          labelText={"Rol"}
          options={[
            <option>Angajat</option>,
            <option>Team Leader</option>,
            <option>CEO</option>,
          ]}
          selectProps={{
            id: "rol",
          }}
          inputType="select"
        />

        <InputGroup
          labelText={"Functie"}
          options={[
            <option>Front-end developer</option>,
            <option>Back-end developer</option>,
            <option>Tester</option>,
            <option>Trainer</option>,
          ]}
          selectProps={{
            id: "functie",
          }}
          inputType="select"
        />

        <Button
          buttonType="full"
          buttonText="REGISTER"
          buttonProps={{
            type: "submit",
          }}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
