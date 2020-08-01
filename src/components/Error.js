import React from "react";
import styled from "@emotion/styled";

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

export default Error;
