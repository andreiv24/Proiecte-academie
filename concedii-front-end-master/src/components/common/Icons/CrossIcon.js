import React from "react";
import styled from "styled-components";
import crossIcon from "../../../img/svg/common/icons/x-mark.svg";

const IconElement = styled.i`
  background-image: url(${crossIcon});
  width: 2.25rem;
  height: 0.875rem;
  background-size: auto;
  cursor: pointer;
  background-repeat: no-repeat;
`;

const CrossIcon = (props) => {
  return <IconElement {...props.props} />;
};

export default CrossIcon;
