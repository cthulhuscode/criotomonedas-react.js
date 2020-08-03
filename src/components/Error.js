import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ErroMessage = styled.p`
  background-color: #c90000;
  padding: 0.6rem;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ msg }) => {
  return <ErroMessage>{msg}</ErroMessage>;
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
