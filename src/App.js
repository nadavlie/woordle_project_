import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
// import { Route, Switch } from "react-router-dom";

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
  margin 170px 39%;
`;

export default function App() {
  const [userInputs, SetUserInputs] = useState("");

  function AddLetter(letter) {
    SetUserInputs(userInputs + letter);
  }
  function RemoveLetter() {
    if (userInputs.length > 0 && userInputs.length % 5 !== 0) {
      SetUserInputs(userInputs.slice(0, userInputs.length - 1));
    }
  }

  function keyboardHandler(event) {
    if (event.key === "Backspace") {
      RemoveLetter();
    } else if (QWERTY.includes(event.key.toUpperCase()))
      AddLetter(event.key.toUpperCase());
    else if (event.key === "Escape") {
      return;
    } else {
      alert("Please Enter Letters Only");
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);
    return () => {
      window.removeEventListener("keydown", keyboardHandler);
    };
  }, [userInputs]);

  if (userInputs.length % 5 === 0 && userInputs.length > 0) {
    console.log("DONE");
  }

  return (
    <div>
      <Header />
      <FullDisplay>
        <GameInputWrapper>
          <Row
            letterstodisplay={
              userInputs.slice(0, 5) ? userInputs.slice(0, 5) : ""
            }
            newline={userInputs.length === 0 ? true : false}
          />
          <Row
            letterstodisplay={
              userInputs.slice(5, 10) ? userInputs.slice(5, 10) : ""
            }
            newline={userInputs.length === 5 ? true : false}
          />
          <Row
            letterstodisplay={
              userInputs.slice(10, 15) ? userInputs.slice(10, 15) : ""
            }
            newline={userInputs.length === 10 ? true : false}
          />
          <Row
            letterstodisplay={
              userInputs.slice(15, 20) ? userInputs.slice(15, 20) : ""
            }
            newline={userInputs.length === 15 ? true : false}
          />
          <Row
            letterstodisplay={
              userInputs.slice(20, 25) ? userInputs.slice(20, 25) : ""
            }
            newline={userInputs.length === 20 ? true : false}
          />
          <Row
            letterstodisplay={
              userInputs.slice(25, 30) ? userInputs.slice(25, 30) : ""
            }
            newline={userInputs.length === 25 ? true : false}
          />
        </GameInputWrapper>
        <KeyBoard
          QWERTY={QWERTY}
          AddLetter={AddLetter}
          RemoveLetter={RemoveLetter}
        />
      </FullDisplay>
    </div>
  );
}
