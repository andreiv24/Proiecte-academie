import React from "react";

import Button from "../Buttons/Button";
// import classes from "../../../styles/common/InputGroup/ButtonsInputGroup.module.css";
import classes from "../../../sass/components/common/InputGroup/ButtonsInputGroup.module.sass";

const ButtonsInputGroup = (props) => {
  return (
    <div className={classes.group}>
      <label {...props.labelProps} htmlFor={props.inputProps.id}>
        {props.labelText}
      </label>

      <div className={classes["buttons-container"]}>
        <Button
          tertiaryColor="blue"
          buttonType="tertiary"
          buttonText="Overtime Transfer"
          buttonProps={{
            style: {
              marginRight: ".5rem",
            },
          }}
        />
        <Button buttonType="tertiary" buttonText="Payout" />
      </div>
    </div>
  );
};

export default ButtonsInputGroup;
