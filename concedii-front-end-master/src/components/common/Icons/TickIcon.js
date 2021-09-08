import React from "react";
import styled from "styled-components";
import tickIcon from "../../../img/svg/common/icons/tick-mark.svg";

const IconElement = styled.i`
  background-image: url(${tickIcon});
  width: 42px;
  height: 13.4px;
  background-size: auto;
  cursor: pointer;
  background-repeat: no-repeat;
`;

const TickIcon = (props) => {
  return <IconElement {...props.props} />;
};

export default TickIcon;
