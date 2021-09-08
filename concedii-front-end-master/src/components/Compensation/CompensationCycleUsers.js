import React from "react";
// import classes from "../../styles/Compensation/CompensationCycleUsers.module.css";
import classes from "../../sass/components/Compensation/CompensationCycleUsers.module.sass";

import Button from "../common/Buttons/Button";
import Title from "./Title";
import UserCount from "./UserCount";
import dummyIcon from "../../img/svg/compensation/default-user-picture.svg";

const CompensationCylceUsers = () => {
  return (
    <div className={classes.container}>
      <Title
        text={"LAST CYCLE (01.07.2021 - 31.07.2021)"}
        leftSideProps={{
          style: {
            transform: "translate(.5rem, -.5rem)",
          },
        }}
      >
        <Button
          buttonType="tertiary"
          buttonText="<"
          buttonProps={{
            style: {
              marginRight: ".5rem",
            },
          }}
        />
        <Button buttonType="tertiary" buttonText="Cancel" />
      </Title>

      <UserCount icon={dummyIcon} count={0} text={"User compensated"} />
      <UserCount
        icon={dummyIcon}
        count={0}
        text={"User partially compensated"}
      />
      <UserCount icon={dummyIcon} count={1} text={"User not compensated"} />
    </div>
  );
};

export default CompensationCylceUsers;
