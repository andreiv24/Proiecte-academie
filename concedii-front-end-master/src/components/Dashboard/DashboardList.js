import React from "react";
import classes from "../../sass/components/Dashboard/DashboardList.module.sass";

import Message from "../common/Messages/Message";
import Select from "../common/Selects/Select";

const DashboardList = (props) => {
  return (
    <div className={classes["item"]} {...props.props}>
      {props.title && (
        <p
          className={classes["title"]}
          style={{
            marginLeft: "1rem",
            marginTop: "1rem",
          }}
        >
          {props.title}
        </p>
      )}
      {props.selectOptions && (
        // <select className={classes["select"]}>{props.selectOptions}</select>
        <Select
          props={{
            style: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              marginLeft: "1rem",
            },
          }}
        />
      )}

      {props.hasSeparator && <div className={classes.separator}></div>}

      {props.message && (
        <Message
          text={props.message}
          props={{
            style: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
          }}
        />
      )}

      {props.children}
    </div>
  );
};

export default DashboardList;
