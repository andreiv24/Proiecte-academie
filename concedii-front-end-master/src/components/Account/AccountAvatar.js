import React from "react";
// import classes from "../../styles/Account/AccountAvatar.module.css";
import classes from "../../sass/components/Account/AccountAvatar.module.sass";

const defaultAvatarStyles = {
  backgroundSize: "cover",
  width: "2.125rem",
  height: "2.125rem",
};

const AccountAvatar = (props) => {
  return (
    <div className={classes.avatar}>
      <i
        style={{
          ...defaultAvatarStyles,
          backgroundImage: `url(${props.avatar})`,
        }}
      ></i>
      <div className={classes["avatar__info"]}>
        <p className={classes["avatar__name"]}>{props.name}</p>
        {props.aditionalAvatarInfo && (
          <p className={classes["avatar__aditional"]}>
            {props.aditionalAvatarInfo.map((element) => (
              <span>{element}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountAvatar;
