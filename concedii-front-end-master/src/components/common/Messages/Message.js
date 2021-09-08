import React from "react";
// import classes from "../../../styles/common/Messages/Message.module.css";
import classes from "../../../sass/components/common/Messages/Message.module.sass";

const Message = (props) => {
  return (
    <p className={classes.message} {...props.props}>
      {props.text}
    </p>
  );
};

export default Message;
