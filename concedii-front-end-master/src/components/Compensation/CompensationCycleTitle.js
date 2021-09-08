import React from "react";
// import classes from "../../styles/Compensation/CompensationCycleTitle.module.css";
import classes from "../../sass/components/Compensation/CompensationCycleTitle.module.sass";

import leftArrow from "../../img/svg/compensation/left-arrow.svg";
import styled from "styled-components";

const Icon = styled.i`
  background-image: url(${leftArrow});
  margin-right: 0.875rem;
  /* line-height: 0; */
  color: white;
  background-size: cover;
  width: 0.5rem;
  height: 0.75rem;
  cursor: pointer;
`;

const CompensationCylceTitle = (props) => {
  return (
    <div className={classes.container}>
      <p>Complete the compensation for the last cycle</p>
      <Icon></Icon>
    </div>
  );
};

export default CompensationCylceTitle;
