import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

// Custom Hook
import useCoin from "../hooks/useCoin";
import useCryptocoin from "../hooks/useCryptocoin";

// Components
import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCoin, setCryptocoin }) => {
  // State for the cryptocoin list
  const [cryptoList, setCryptoList] = useState([]);

  const [error, setError] = useState(false);

  const COINS = [
    { code: "USD", name: "Dolar de Estados Unidos" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina" },
  ];

  // useCoin
  const [coin, SelectCoin] = useCoin("Elige tu moneda", "", COINS);

  // useCryptocoin
  const [cryptocoin, SelectCrypto] = useCryptocoin(
    "Elige tu criptomoneda",
    "",
    cryptoList
  );

  // Call the API
  // useEffect
  useEffect(() => {
    const queryApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);
      setCryptoList(result.data.Data);
    };
    queryApi();
  }, []);

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (!coin === "" || cryptocoin === "") {
      setError(true);
      return;
    }
    setError(false);

    // Send the data to App
    setCoin(coin);
    setCryptocoin(cryptocoin);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error msg="Todos los campos son obligatorios" /> : null}
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="Calcular" />
    </form>
  );
};

export default Form;
