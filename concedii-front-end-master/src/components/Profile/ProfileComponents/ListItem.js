import Button from "../Buttons/Button";
import ProfilePic from "./ProfilePic";
const ListItem = ({
  ProfileURL,
  imageURL,
  NumeSurnume,
  emailText,
  idNumber,
}) => {
  return (
    <li>
      <ProfilePic
        pictureURL={ProfileURL}
        width="32"
        height="32"
        aditionalclass="smallProfilePicID"
      />
      <Button type="tertiary" imageURL={imageURL} extraclass="nikebutton" />
      <span>
        <div className="profilePicText">
          <div>{NumeSurnume}</div>
          <div>{emailText}</div>
          <div>{idNumber}</div>
        </div>
      </span>
    </li>
  );
};

export default ListItem;
