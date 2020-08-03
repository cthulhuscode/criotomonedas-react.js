import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import img from "./cryptomonedas.png";

// Components
import Form from "./components/Form";
import Quotation from "./components/Quotation";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  // useState
  const [coin, setCoin] = useState("");
  const [cryptoCoin, setCryptocoin] = useState("");
  const [result, setResult] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    const getCryptocoinData = async () => {
      // Avoid a first execution
      if (cryptoCoin === "" || coin === "") {
        return;
      }

      // Do the quotation
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
      const result = await axios.get(url);

      if (!result) {
        console.log("Error retrieving the data");
        return;
      }

      // Show spinner
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
        setResult(result.data.DISPLAY[cryptoCoin][coin]);
      }, 600);
    };
    getCryptocoinData();
  }, [coin, cryptoCoin]);

  const component = showSpinner ? (
    <Spinner showSpinner={showSpinner} setShowSpinner={setShowSpinner} />
  ) : (
    <Quotation result={result} />
  );

  return (
    <Container>
      <div>
        <Image src={img} alt="Crytoimage" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form setCoin={setCoin} setCryptocoin={setCryptocoin} />
        {component}
      </div>
    </Container>
  );
}

export default App;
