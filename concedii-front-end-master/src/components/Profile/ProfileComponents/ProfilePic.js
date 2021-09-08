import React from "react";

const ProfilePic = ({
  pictureURL,
  width,
  height,
  profilePicID,
  aditionalclass,
}) => {
  return (
    <img
      src={pictureURL}
      alt="Avatar"
      className={`avatar ${aditionalclass}`}
      width={width}
      height={height}
      id={profilePicID}
    />
  );
};

export default ProfilePic;
