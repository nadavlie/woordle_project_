import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";
import React, { useState } from "react";

// hard coding the keyboard
const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("");
const RowsInputWrapper = styled.div`
  margin-left: 370px;
  margin-top: 50px;
`;

export default function App() {
  const [userInputs, SetUserInputs] = useState("");
  function AddLetter(letter) {
    SetUserInputs(userInputs + letter);
  }

  return (
    <div>
      <RowsInputWrapper>
        <Row currentGuess={userInputs} />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </RowsInputWrapper>
      <KeyBoard QWERTY={QWERTY} AddLetter={AddLetter} />
    </div>
  );
}
