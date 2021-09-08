import React from "react";
import tableClasses from "../../sass/components/Overview/TableCard.module.sass";
import listClasses from "../../sass/components/Overview/ListCard.module.sass";
import PurpleButton from "../../components/common/Buttons/PurpleButton";
import docImg from "../../img/svg/overview/doc.svg";

function TableCard(p) {
  function key() {
    return Math.random().toString(36).substr(2, 9);
  }

  return (
    <>
      <div
        className={`${tableClasses["pd-0"]} ${listClasses["inf-card"]}`}
        key={key()}
      >
        <div className={listClasses.row} key={key()}>
          <div className={listClasses["col-md-10"]} key={key()}>
            <label
              className={`${listClasses["title"]} ${tableClasses["pd-16"]}`}
              key={key()}
            >
              {p.title}
            </label>
          </div>
          <div
            className={`${listClasses["col-md-2"]} ${listClasses["align-end"]}`}
            id={listClasses["padding-top"]}
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
        <div
          className={`${listClasses.row} ${tableClasses["header-style"]}`}
          key={key()}
        >
          {p.tHeader.map((header) => (
            <div className={listClasses.col} key={key()}>
              <label
                className={listClasses["item-title"]}
                style={{ marginRight: header.mr }}
                key={key()}
              >
                {header.label}
              </label>
            </div>
          ))}
        </div>
        {typeof p.emergencyData === "undefined" ? (
          <>
            <div className={listClasses.row} key={key()}>
              <label className={tableClasses["no-notes"]} key={key()}>
                No Notes
              </label>
            </div>
          </>
        ) : (
          <>
            {p.emergencyData.length === 0 ? (
              <>
                <div className={listClasses.row} key={key()}>
                  <label className={tableClasses["no-notes"]} key={key()}>
                    No Notes
                  </label>
                </div>
              </>
            ) : (
              <>
                {p.emergencyData.map((data) => (
                  <div
                    className={`${listClasses.row} ${tableClasses["pd-16"]}`}
                    key={key()}
                  >
                    <div className={listClasses.col} key={key()}>
                      <label className={listClasses["item-data"]} key={key()}>
                        {data.name}
                      </label>
                    </div>
                    <div className={listClasses.col} key={key()}>
                      <label className={listClasses["item-data"]} key={key()}>
                        {data.pNumber}
                      </label>
                    </div>
                    <div className={listClasses.col} key={key()}>
                      <label className={listClasses["item-data"]} key={key()}>
                        <img
                          src={data.doc ? docImg : null}
                          alt={""}
                          key={key()}
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default TableCard;
