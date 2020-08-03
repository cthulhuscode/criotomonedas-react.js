import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ResultContainer = styled.div`
  color: #fff;
  font-family: "Bebas Neue", cursive;
`;
const Price = styled.p`
  font-size: 44px;
  span {
    color: yellow;
  }
`;
const Info = styled.p`
  font-size: 24px;
  span {
    color: yellow;
  }
`;

const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ResultContainer>
      <Price>
        El precio es: <span>{result.PRICE}</span>
      </Price>
      <Info>
        Precio más alto del día: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultContainer>
  );
};

Quotation.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Quotation;
