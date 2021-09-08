import React from "react";
import classes from "../../sass/components/Dashboard/DashboardAbsence.module.sass";

const DashboardAbsence = (props) => {
  return (
    <div className={classes["dashboard-container__first-section-item"]}>
      {props.icon && (
        <i
          className={classes["vacantion-icon"]}
          style={{
            backgroundImage: `url(${props.icon})`,
          }}
        ></i>
      )}

      <div
        className={`${classes["dashboard-container__first-section-item--1"]}`}
        {...props.props}
      >
        <span className={classes["item-span"]}>{props.value}</span> x{" "}
        {props.title}
      </div>
      {props.controller}
    </div>
  );
};

export default DashboardAbsence;
