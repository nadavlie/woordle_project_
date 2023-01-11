import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import WordHandler from "./WordHandler";
import wordPainting from "./wordPainting";
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
  const [rowStyle, setRowStyle] = useState([]);
  const [keyboardstyle, setKeyboardStyle] = useState({});
  console.log("this i startser", keyboardstyle);

  // change to preveous state instaed + letter
  function AddLetter(letter) {
    SetUserInputs(prev => prev + letter);
  }
  function RemoveLetter() {
    if (userInputs.length > 0 && userInputs.length % 5 !== 0) {
      SetUserInputs(userInputs.slice(0, userInputs.length - 1));
    }
  }
  //  keyboard handeling events and sending to state sets according to value
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

  useEffect(() => {
    if (userInputs.length % 5 == 0 && userInputs.length > 0) {
      if (!WordHandler(userInputs.slice(-5).toLowerCase())) {
        SetUserInputs(userInputs.slice(0, -5));
        setRowStyle(prev => [...prev.slice(-5)]);

        console.log("bad");
        alert("not a valid word!");
      } else {
        let wordstyle = wordPainting(userInputs.slice(-5).toLowerCase());
        const currentGuesse = userInputs.slice(-5).split("");
        let currentobj = {};
        for (let i = 0; i < 5; i++) {
          currentobj[currentGuesse[i]] = wordstyle[i];
        }

        setRowStyle(prev => [...prev, ...wordstyle]);
        setKeyboardStyle({ ...keyboardstyle, ...currentobj });
      }
    }
  }, [userInputs]);

  return (
    <div>
      <Header />
      <FullDisplay>
        <GameInputWrapper>
          <Row
            letterstodisplay={userInputs.slice(0, 5)}
            color={rowStyle.slice(0, 5)}
            newline={userInputs.length === 0 ? true : false}
          />
          <Row
            letterstodisplay={userInputs.slice(5, 10)}
            newline={userInputs.length === 5 ? true : false}
            color={rowStyle.slice(5, 10)}
          />
          <Row
            letterstodisplay={userInputs.slice(10, 15)}
            newline={userInputs.length === 10 ? true : false}
            color={rowStyle.slice(10, 15)}
          />
          <Row
            letterstodisplay={userInputs.slice(15, 20)}
            newline={userInputs.length === 15 ? true : false}
            color={rowStyle.slice(15, 20)}
          />
          <Row
            letterstodisplay={userInputs.slice(20, 25)}
            newline={userInputs.length === 20 ? true : false}
            color={rowStyle.slice(20, 25)}
          />
          <Row
            letterstodisplay={userInputs.slice(25, 30)}
            newline={userInputs.length === 25 ? true : false}
            color={rowStyle.slice(25, 30)}
          />
        </GameInputWrapper>
        <KeyBoard
          color={keyboardstyle}
          QWERTY={QWERTY}
          AddLetter={AddLetter}
          RemoveLetter={RemoveLetter}
        />
      </FullDisplay>
    </div>
  );
}
