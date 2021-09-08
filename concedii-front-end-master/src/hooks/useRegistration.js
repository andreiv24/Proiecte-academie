import { useState } from "react";

export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";

export const EMAIL = "EMAIL";
export const PASSWORD = "PASSWORD";
export const PASSWORD_AGAIN = "PASSWORD_AGAIN";

const useAuthentication = () => {
  const [wasFirstNameTouched, setFirstNameTouched] = useState(false);
  const [wasLastNameTouched, setLastNameTouched] = useState(false);
  const [wasEmailTouched, setEmailTouched] = useState(false);
  const [wasPasswordTouched, setPasswordTouched] = useState(false);
  const [wasPasswordAgainTouched, setPasswordAgainTouched] = useState(false);

  const checkValidity = (element, newValue, isFirstTime = false) => {
    let errorMessage = null;

    //FIRST NAME
    if (element === FIRST_NAME) {
      const invalidLength =
        (wasFirstNameTouched && newValue.trim() === "") ||
        (isFirstTime && newValue.trim() === "");
      if (invalidLength) {
        errorMessage = "First name field required";
      }
      return errorMessage;
    }

    //LAST NAME
    if (element === LAST_NAME) {
      const invalidLength =
        (wasLastNameTouched && newValue.trim() === "") ||
        (isFirstTime && newValue.trim() === "");
      if (invalidLength) {
        errorMessage = "Last name field required";
      }
      return errorMessage;
    }

    //EMAIL
    if (element === EMAIL) {
      const invalidLength =
        (wasEmailTouched && newValue.trim() === "") ||
        (isFirstTime && newValue.trim() === "");
      if (invalidLength) {
        errorMessage = "Email field required";
      }
      return errorMessage;
    }

    //PASSWORD
    if (element === PASSWORD) {
      const invalidLength =
        (wasPasswordTouched && newValue.trim() === "") ||
        (isFirstTime && newValue.trim() === "");
      if (invalidLength) {
        errorMessage = "Password field required";
      }
      return errorMessage;
    }

    //PASSWORD AGAIN
    if (element === PASSWORD_AGAIN) {
      const invalidLength =
        (wasPasswordAgainTouched && newValue.trim() === "") ||
        (isFirstTime && newValue.trim() === "");
      if (invalidLength) {
        errorMessage = "PAssword again field required";
      }
      return errorMessage;
    }
  };

  return [
    checkValidity,
    setFirstNameTouched,
    setLastNameTouched,
    setEmailTouched,
    setPasswordTouched,
    setPasswordAgainTouched,
  ];
};
export default useAuthentication;
