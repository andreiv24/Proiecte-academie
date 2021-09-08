import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./profile.css";

import classes from "../../sass/components/Profile/profile.module.sass";

import ProfilePic from "./ProfileComponents/ProfilePic";
import Button from "./Button";

import "./Button.css";
import "./profile.css";

import ProfilePicV2 from "../../img/Profile/photoattempt.jpeg";
import Backbutton from "../../img/Profile/BlackArrow.svg";

// import ProfilePicV2 from "./photoattempt.jpeg";
// import Backbutton from "./BlackArrow.svg";
const ProfuleCardComp = () => {
  return (
    <div className={classes["white-container"]}>
      <span className={`${classes["alignleft"]} ${classes.topText}`}>
        123456
      </span>
      <span className={`${classes.alignright} ${classes.topText}`}>Owner</span>
      <div className={classes["orice"]}>
        {/* <ProfilePic pictureURL="" /> */}
        <Button type="tertiary" imageURL={Backbutton} />
        <ProfilePic
          pictureURL={ProfilePicV2}
          width={92}
          height={92}
          profilePicID="bigProfilePicture"
        />

        <div className={classes["centertext"]} id="profileNameID">
          Name username
        </div>
        <div className={classes["centertext"]} id="profileEmailID">
          nameusername@gmail.com
        </div>

        <Button type="secondary" text="Show Profile" />
        <Button type="secondary" text="Show Password" />
        <Button type="secondary" text="Log Out" />
      </div>
    </div>
  );
};

export default ProfuleCardComp;
