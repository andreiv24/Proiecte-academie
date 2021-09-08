import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import classes from "../../../sass/components/common/Buttons/PurpleButton.module.sass";

function PurpleButton(p) {
  let className = "";
  if (p.type === "secondary-grey") className = classes["secondary-grey"];
  else className = className + classes["btn"] + classes["mt-3"];
  return (
    <>
      <button className={className} id={p.id}>
        {p.text}
      </button>
    </>
  );
}

export default PurpleButton;
