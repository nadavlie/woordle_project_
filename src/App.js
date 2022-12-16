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
  const FirstRun = localStorage.setItem("FirstRender", "true");

  const [userInputs, SetUserInputs] = useState("");

  function AddLetter(letter) {
    SetUserInputs(userInputs + letter);
  }
  function lengthofcurrentguess() {
    return userInputs.length === 5;
  }

  return (
    <div className="lieberman">
      <RowsInputWrapper>
        <Row
          a={lengthofcurrentguess}
          a2={userInputs.slice(0, 5) ? userInputs.slice(0, 5) : ""}
        />
        <Row
          a={lengthofcurrentguess}
          a2={userInputs.slice(5, 10) ? userInputs.slice(5, 10) : ""}
        />
        <Row
          a={lengthofcurrentguess}
          a2={userInputs.slice(10, 15) ? userInputs.slice(10, 15) : ""}
        />
        <Row
          a={lengthofcurrentguess}
          a2={userInputs.slice(15, 20) ? userInputs.slice(15, 20) : ""}
        />
        <Row
          a={lengthofcurrentguess}
          a2={userInputs.slice(20, 25) ? userInputs.slice(20, 25) : ""}
        />
        <Row
          a={lengthofcurrentguess}
          a2={userInputs.slice(25, 30) ? userInputs.slice(25, 30) : ""}
        />
      </RowsInputWrapper>
      <KeyBoard QWERTY={QWERTY} AddLetter={AddLetter} />
    </div>
  );
}
