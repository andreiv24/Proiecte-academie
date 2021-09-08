import React from "react";
import classes from "../../sass/components/Dashboard/DashboardProfile.module.sass";
import AccountInfoCard from "../Account/AccountInfoCard";

const DashboardProfile = (props) => {
  return (
    <div className={classes.container}>
      <AccountInfoCard
        aditionalAvatarInfo={props.aditionalAvatarInfo}
        props={props.props}
        name={props.name}
        firstInfo={props.firstInfo}
        secondInfo={props.secondInfo}
      >
        {props.children}
      </AccountInfoCard>
    </div>
  );
};

export default DashboardProfile;
