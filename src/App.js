import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";
import React, { useState } from "react";

// hard coding the keyboard
const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("");
const RowsInputWrapper = styled.div`
  margin-left: 370px;
  margin-top: 140px;
`;

export default function App() {
  const [userInputs, SetUserInputs] = useState("");
  const [guesstry, Setguesstry] = useState(1);

  function AddLetter(letter) {
    SetUserInputs(userInputs + letter);
  }
  function lengthofcurrentguess() {
    return userInputs.length === 5;
  }
  if (lengthofcurrentguess()) {
    SetUserInputs("");
    Setguesstry(guesstry + 1);
  }

  return (
    <div className="lieberman">
      <RowsInputWrapper>
        <Row a={lengthofcurrentguess} a2={guesstry === 1 ? userInputs : ""} />
        <Row a={lengthofcurrentguess} a2={guesstry === 2 ? userInputs : ""} />
        <Row a={lengthofcurrentguess} a2={guesstry === 3 ? userInputs : ""} />
        <Row a={lengthofcurrentguess} a2={guesstry === 4 ? userInputs : ""} />
        <Row a={lengthofcurrentguess} a2={guesstry === 5 ? userInputs : ""} />
        <Row a={lengthofcurrentguess} a2={guesstry === 6 ? userInputs : ""} />
      </RowsInputWrapper>
      <KeyBoard QWERTY={QWERTY} AddLetter={AddLetter} />
    </div>
  );
}
