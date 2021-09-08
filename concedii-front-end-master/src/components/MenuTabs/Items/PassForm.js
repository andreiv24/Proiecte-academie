import React, { useState } from "react";
// import "./PassForm.css";

import classes from "../../../sass/components/MenuTabs/Items/PassForm.module.sass";

import ochi from "../../../img/svg/menu-tabs/ochi.svg";
import ochitaiat from "../../../img/svg/menu-tabs/ochitaiat.svg";

// import ochi from "../../../resources/imgs/ochi.svg";
// import ochitaiat from "../../../resources/imgs/ochitaiat.svg";

//Formul pentru parola impreuna cu butonul de vizualizare parola
const PassForm = (props) => {
  const [isReveal, setReveal] = useState(false);
  return (
    <div className={classes["Form-Group"]}>
      <div className={classes["labels"]}>
        <label className={classes["label-pass"]}>{props.tag}</label>

        <label className={classes["label-forgot"]}>
          <a
            className={classes["anchor"]}
            href="https://www.google.ro"
            target="_blank"
          >
            {props.link}
          </a>
        </label>
      </div>
      <div className={classes["pass-container"]}>
        <input
          type={isReveal ? "text" : "password"}
          className={classes["input-form-2"]}
          placeholder="Password"
        />
        <img
          className={classes["pass-eye"]}
          src={isReveal ? ochitaiat : ochi}
          onClick={() => setReveal((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default PassForm;
