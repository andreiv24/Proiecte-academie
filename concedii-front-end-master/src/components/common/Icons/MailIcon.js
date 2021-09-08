import React from "react";
import styled from "styled-components";
import mailIcon from "../../../img/svg/common/icons/mail.svg";

const IconElement = styled.i`
  background-image: url(${mailIcon});
  width: 46px;
  height: 16px;
  background-size: auto;
  cursor: pointer;
  background-repeat: no-repeat;
`;

const MailIcon = (props) => {
  return <IconElement {...props.props} />;
};

export default MailIcon;
