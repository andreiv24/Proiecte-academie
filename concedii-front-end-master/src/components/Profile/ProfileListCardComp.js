import React from "react";
import Button from "./Common/Buttons/Button";
import ProfilePic from "./Common/Profile/ProfilePic";
import ProfileURL from "./photoattempt.jpeg";
import BackArrow from "./BlackArrow.svg";
import AddToListFooter from "./Common/Profile/AddToListFooter";
import blackNike from "./nikeButton.svg";
import ListItem from "./Common/Profile/ListItem.js";

const ProfileListCardComp = () => {
  return (
    <div className="white-container listCardContainer">
      <div>
        <ul>
          <ListItem
            ProfileURL={ProfileURL}
            imageURL={blackNike}
            NumeSurnume="NumeSurnume"
            emailText="numeSurnume@yandex.ru"
            idNumber="42069"
          />
        </ul>
        <Button type="tertiary" imageURL={BackArrow} buttonID="iddqd" />
      </div>

      <AddToListFooter />
    </div>
  );
};

export default ProfileListCardComp;
