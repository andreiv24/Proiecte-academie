import { useState } from "react";

export const EMAIL = "EMAIL";
export const PASSWORD = "PASSWORD";

const useAuthentication = () => {
  const [wasEmailTouched, setEmailTouched] = useState(false);
  const [wasPasswordTouched, setPasswordTouched] = useState(false);

  const checkValidity = (element, newValue, isFirstTime = false) => {
    let errorMessage = null;

    if (element === EMAIL) {
      const invalidEmailLength =
        (wasEmailTouched && newValue.trim() === "") ||
        (isFirstTime && newValue.trim() === "");
      if (invalidEmailLength) {
        errorMessage = "Email field required";
      }
      return errorMessage;
    }

    const invalidPasswordLength =
      (wasPasswordTouched && newValue.trim() === "") ||
      (isFirstTime && newValue.trim() === "");
    if (invalidPasswordLength) {
      errorMessage = "Password filed required";
    }
    return errorMessage;
  };

  return [checkValidity, setEmailTouched, setPasswordTouched];
};
export default useAuthentication;
