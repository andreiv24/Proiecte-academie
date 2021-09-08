import HolidaysGroup from "./holidays_group";
import React from "react";
// import "./holidays.css";

import classes from "../../../sass/components/MenuTabs/Holidays/holidays.module.sass";

import Labels from "../Items/Labels";

const Holidays = () => {
  return (
    <div className={classes["holidays_whitecontainer"]}>
      <div className={classes["holiday-title"]}>
        <Labels type="titlelabel-holiday" label="Bank Holidays - 2021" />
      </div>
      <HolidaysGroup
        type="holiday_group"
        holiday_date="01.01.2021"
        holiday_dateweek="Friday"
        holiday_type="Revelion"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="02.01.2021"
        holiday_dateweek="Saturday"
        holiday_type="Revelion"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="24.01.2021"
        holiday_dateweek="Sunday"
        holiday_type="Unirea Principatelor Unite"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="30.04.2021"
        holiday_dateweek="Friday"
        holiday_type="Vinerea Mare"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="01.05.2021"
        holiday_dateweek="Saturday"
        holiday_type="Paste"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="02.05.2021"
        holiday_dateweek="Sunday"
        holiday_type="Paste"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="03.05.2021"
        holiday_dateweek="Monday"
        holiday_type="Ziua Muncii"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="01.06.2021"
        holiday_dateweek="Tuesday"
        holiday_type="Ziua Copilului"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="20.06.2021"
        holiday_dateweek="Sunday"
        holiday_type="Rusaliile"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="21.06.2021"
        holiday_dateweek="Monday"
        holiday_type="Rusaliile"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="15.09.2021"
        holiday_dateweek="Sunday"
        holiday_type="Adormirea Maicii Domnului"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="30.11.2021"
        holiday_dateweek="Tuesday"
        holiday_type="Sfantul Andrei"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="01.12.2021"
        holiday_dateweek="Wednesday"
        holiday_type="Ziua Nationala a Romaniei"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="25.12.2021"
        holiday_dateweek="Saturday"
        holiday_type="Craciun"
      />
      <HolidaysGroup
        type="holiday_group"
        holiday_date="26.12.2021"
        holiday_dateweek="Sunday"
        holiday_type="Craciun"
      />
    </div>
  );
};

export default Holidays;
