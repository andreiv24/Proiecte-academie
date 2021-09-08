// import React from "react";
// import './../../../App.css';

// function Button(props) {
//   return (
//     <div className={props.divclass}>
//       <button className={props.buttonclass} {...props.buttonProps}>{props.text}</button>
//     </div>
//   );
// }
// export default Button;

import React from "react";
// import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";

const Button = ({ type, text, buttonID, imageURL, extraclass }) => {
  switch (type) {
    case "secondary":
      return <SecondaryButton text={text} />;
    // case "primary":
    //   return <PrimaryButton text={text} />;
    case "tertiary":
      return (
        <TertiaryButton
          imageURL={imageURL}
          buttonID={buttonID}
          extraclass={extraclass}
        />
      );
    default:
      return <SecondaryButton text={text} />;
  }
};

export default Button;
