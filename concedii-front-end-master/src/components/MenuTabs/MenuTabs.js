import React from "react";
// import "./MenuTabs.css";

import classes from "../../sass/components/MenuTabs/MenuTabs.module.sass";
// import close from "../../resources/imgs/close.svg";

import TitlePage from "./Items/TitlePage";
import Labels from "./Items/Labels";
import MainButton from "./Items/MainButton";
// import Overview from "../Overview/Overview";
import SubNavbar from "./Items/SubNavbar";
import Documents from "./Documents/Documents";
import SquareFig from "./Items/SquareFig";
import Holidays from "./Holidays/holidays";
import Absences from "./Absences/Absences";
// import OverviewGeneral from "../Overview/OverviewGeneral/OverviewGeneral";

const MenuTabs = () => {
  return (
    <>
      {/* <main> */}
      {/* <div className={"box"}> */}
      {/* <div className="big-container-1"></div> */}
      <div className={classes["big-container-2"]}>
        <div className={classes["menu-container-1"]}>
          <SquareFig type="avatar" label="NU" />
          <div className={classes["info-menu"]}>
            <TitlePage type={"subtitle"} title="Name Username" />
            <div className={classes["info-sub"]}>
              <Labels type={"sublabel"} label="Owner" />
              <Labels type={"sublabel"} label="Main Location" />
            </div>
            <MainButton buttonName="Overview" type="tertiary" />
            <MainButton buttonName="Personnel Information" type="tertiary" />
            <MainButton
              buttonName="Personal Information"
              type="quattrostagioni"
            />
            <MainButton
              buttonName="Contract Information"
              type="quattrostagioni"
            />
            <MainButton
              buttonName="Remuneration & Benefits"
              type="quattrostagioni"
            />
            <MainButton buttonName="Work Schedules" type="tertiary" />
            <MainButton buttonName="Allowances" type="tertiary" />
            <MainButton buttonName="Holidays" type="tertiary" />
            <MainButton buttonName="Absence days" type="tertiary" />
            <MainButton buttonName="Documents" type="tertiary" />
          </div>
        </div>

        <div className={classes["menu-container-2"]}>
          <SubNavbar />
          <Absences />
          {/*<SubNavbar/>*/}
          {/*<div className="container-content-grey">*/}
          {/*           <Overview type="overviewsection"/>*/}
          {/*</div>*/}
          <SubNavbar />
          <div className={classes["container-content-white"]}>
            <Documents />
          </div>
          <SubNavbar />
          <div className={classes["container-content-grey"]}>
            <Holidays />
          </div>
          <SubNavbar />
          <div className={classes["container-content-grey-grid"]}>
            <div className={classes["content-left"]}>
              {/* <OverviewGeneral /> */}
            </div>
            <div className={classes["content-right"]}></div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </main> */}
    </>
  );
};

export default MenuTabs;
