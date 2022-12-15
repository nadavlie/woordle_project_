import KeyBoard from "./components/KeyBoard";
import styled from "styled-components";
import Row from "./components/Row";
import React, { useState } from "react";

// hard coding the keyboard
const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("");

const ContainerWrapper = styled.div`
  margin: 90px;
  width: 55%;
`;

export default function App() {
  let [currentGuess, setcurrentGuess] = useState("");

  function UserInputHandler(letter) {
    console.log("was clicked-->", currentGuess);
    setcurrentGuess(currentGuess + letter);
  }

  return (
    <ContainerWrapper>
      <Row first={currentGuess} />
      <Row />
      <Row />
      <Row />
      <Row />
      <KeyBoard QWERTY={QWERTY} fun={UserInputHandler} />
    </ContainerWrapper>
  );
}
