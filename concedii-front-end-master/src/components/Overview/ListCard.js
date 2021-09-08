import React from "react";
import classes from "../../sass/components/Overview/ListCard.module.sass";
import PurpleButton from "../../components/common/Buttons/PurpleButton";
import docImg from "../../img/svg/overview/doc.svg";

function ListCard(p) {
  function key() {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <>
      <div key={key()} className={classes["inf-card"]}>
        <div className={classes["padding-extra"]} key={key()}>
          <div className={classes.row}>
            <div className={classes["col-md-10"]} key={key()}>
              <label className={classes.title} key={key()}>
                {p.title}
              </label>
            </div>
            <div
              className={`${classes["align-end"]} ${classes["col-md-2"]}`}
              key={key()}
            >
              <PurpleButton
                text={p.btnLabel}
                type={"secondary-grey"}
                id={p.btnId}
                key={key()}
              />
            </div>
          </div>
          {p.items.map((item) => (
            <div className={classes.row} key={key()}>
              <div className={classes["col-md-2"]} key={key()}>
                <label className={classes["item-title"]} key={key()}>
                  {item.label}
                </label>
              </div>
              <div className={classes["col-md-5"]} key={key()}>
                <label className={classes["item-data"]} key={key()}>
                  {item.data}
                </label>
              </div>
              <div className={classes["col-md-5"]} key={key()}>
                <img src={item.doc ? docImg : null} alt={""} key={key()} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListCard;
