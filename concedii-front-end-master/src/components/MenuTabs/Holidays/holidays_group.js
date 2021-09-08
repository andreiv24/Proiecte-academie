import React from "react";
// import "./holidays_group.css";

import classes from "../../../sass/components/MenuTabs/Holidays/holidays_group.module.sass";

const HolidaysGroup = (props) => {
  const className = `${classes.div} ${classes[props.type]}`;

  return (
    <div className={className}>
      <div className={classes["holiday_date"]}>{props.holiday_date}</div>
      <div className={classes["holiday_dateweek"]}>
        {props.holiday_dateweek}
      </div>
      <div className={classes["holiday_type"]}>{props.holiday_type}</div>
    </div>
  );
};

export default HolidaysGroup;
