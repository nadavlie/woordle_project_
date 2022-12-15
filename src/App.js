import KeyBoard from "./components/KeyBoard";
import styled from "styled-components";
import Row from "./components/Row";
import React, { useState } from "react";

const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("");
// hard coding the keyboard

// styling whole game layout

const GuessingArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
const FullGuessingArea = (
  <GuessingArea>
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
  </GuessingArea>
);
const ContainerWrapper = styled.div`
  margin: 90px;
  width: 55%;
`;

export default function App() {
  let [currentGuess, setcurrentGuess] = useState("");

  function UserInputHandler(letter) {
    setcurrentGuess(currentGuess + letter);
    console.log("was clicked-->", currentGuess);
  }

  return (
    <ContainerWrapper>
      {FullGuessingArea}
      <KeyBoard QWERTY={QWERTY} fun={UserInputHandler} />
    </ContainerWrapper>
  );
}
