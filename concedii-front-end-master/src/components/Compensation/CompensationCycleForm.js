import React from "react";
import InputGroupSecondary from "../common/InputGroup/InputGroupSecondary";
// import classes from "../../styles/Compensation/CompensationCycleForm.module.css";
import classes from "../../sass/components/Compensation/CompensationCycleForm.module.sass";

import ButtonsInputGroup from "../common/InputGroup/ButtonsInputGroup";
import Title from "../Compensation/Title";
import Button from "../common/Buttons/Button";

import questionMarkIcon from "../../img/svg/compensation/question-mark.svg";

const CompensationCylceForm = (props) => {
  return (
    <div className={classes.container}>
      <Title
        text={"COMPENSATION POLICY"}
        leftSideProps={{
          style: {
            transform: "translate(1.5rem, -.5rem)",
          },
        }}
      >
        <Button
          tertiaryColor="blue"
          buttonType="tertiary"
          buttonText="Save"
          buttonProps={{
            style: {
              marginRight: ".5rem",
            },
          }}
        />
        <Button buttonType="tertiary" buttonText="Cancel" />
      </Title>

      <ButtonsInputGroup
        labelText="Type"
        labelProps={{}}
        inputProps={{
          id: "type",
        }}
      />

      <InputGroupSecondary
        labelText="Cycle"
        labelProps={{}}
        inputProps={{
          id: "cycle",
        }}
        type="select"
        options={[<option>Every month</option>]}
      />

      <InputGroupSecondary
        labelText="Metric"
        labelProps={{}}
        inputProps={{
          id: "metric",
        }}
        type="select"
        options={[<option>Overtime balance</option>]}
        icon={questionMarkIcon}
      />

      <InputGroupSecondary
        labelText="Multiplier"
        labelProps={{}}
        inputProps={{
          id: "multiplier",
          placeholder: "1.00",
        }}
      />

      <InputGroupSecondary
        labelText="Allowance"
        labelProps={{}}
        inputProps={{
          id: "allowance",
        }}
        type="select"
        options={[<option>Vacantion</option>]}
      />
    </div>
  );
};

export default CompensationCylceForm;
