import React from "react";
import styled from "styled-components";
import umbrellaIcon from "../../../img/svg/dashboard/vacantion-icon.svg";

const IconElement = styled.i`
  background-image: url(${umbrellaIcon});
  width: 1.12rem;
  height: 1.12rem;
  background-size: auto;
  cursor: pointer;
  background-repeat: no-repeat;
`;

const CrossIcon = (props) => {
  return <IconElement {...props.props} />;
};

export default CrossIcon;
