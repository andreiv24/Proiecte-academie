import React from "react";
// import classes from "../../styles/Account/AccountInfoCard.module.css";
import classes from "../../sass/components/Account/AccountInfoCard.module.sass";

import AccountAvatar from "./AccountAvatar";
import dummyAvatar from "../../img/svg/account/dummy-avatar.svg";

const AccountInfoCard = (props) => {
  console.log(props.children);
  return (
    <div className={classes.container} {...props.props}>
      <AccountAvatar
        aditionalAvatarInfo={props.aditionalAvatarInfo}
        avatar={dummyAvatar}
        name={props.name}
      />
      <div className={classes.info}>
        <p>{props.firstInfo}</p>
        <p className={classes.date}>{props.secondInfo}</p>
      </div>
      {props.children}
    </div>
  );
};

export default AccountInfoCard;
