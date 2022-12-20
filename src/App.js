import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";
import React, { useState } from "react";

// hard coding the keyboard
const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("").concat(["del"]);

const GameInputWrapper = styled.div`
  display: inline-grid;
  gap: 6px;
`;
const FullDisplay = styled.div`
  display: inline-grid;
  gap: 6px;
  grid-template-columns: 1fr;
  justify-items: center;
  margin 170px 30%;
`;

export default function App() {
  const [userInputs, SetUserInputs] = useState("");
  function AddLetter(letter) {
    SetUserInputs(userInputs + letter);
  }
  if (userInputs.length % 5 === 0 && userInputs.length > 0) {
    console.log("DONE");
  }
  return (
    <FullDisplay>
      <GameInputWrapper>
        <Row
          letterstodisplay={
            userInputs.slice(0, 5) ? userInputs.slice(0, 5) : ""
          }
        />
        <Row
          letterstodisplay={
            userInputs.slice(5, 10) ? userInputs.slice(5, 10) : ""
          }
        />
        <Row
          letterstodisplay={
            userInputs.slice(10, 15) ? userInputs.slice(10, 15) : ""
          }
        />
        <Row
          letterstodisplay={
            userInputs.slice(15, 20) ? userInputs.slice(15, 20) : ""
          }
        />
        <Row
          letterstodisplay={
            userInputs.slice(20, 25) ? userInputs.slice(20, 25) : ""
          }
        />
        <Row
          letterstodisplay={
            userInputs.slice(25, 30) ? userInputs.slice(25, 30) : ""
          }
        />
      </GameInputWrapper>
      <KeyBoard QWERTY={QWERTY} AddLetter={AddLetter} />
    </FullDisplay>
  );
}
