import React from "react";
import classes from "../../sass/components/Overview/Overview.module.sass";
import listClasses from "../../sass/components/Overview/ListCard.module.sass";

function Overview(p) {
  return (
    <>
      <div className={classes["overview-card"]}>
        <div className={listClasses.row}>
          <div className={listClasses["col-md-12"]}>
            <label className={classes["overview-title"]}>{p.title}</label>
          </div>
        </div>
        <div className={listClasses.row}>
          <div className={listClasses["col-md-12"]}>{p.children}</div>
        </div>
      </div>
    </>
  );
}

export default Overview;
