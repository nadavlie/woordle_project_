import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";
import React, { useState, useEffect, useReducer } from "react";
import Header from "./components/Header";
import WordHandler from "./WordHandler";
import wordPainting from "./wordPainting";
import gameLogic from "./gameLogic";

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
  // const [userInputs, SetUserInputs] = useState("");
  // const [rowStyle, setRowStyle] = useState([]);
  // const [keyboardstyle, setKeyboardStyle] = useState({});
  // const [isfiveletters, setIsfiveletters] = useState(false);
  const [gameState, dispach] = useReducer(gameLogic, {
    allwords: "",
    g1: [],
    g2: [],
    g3: [],
    g4: [],
    g5: [],
    g6: [],
  });
  console.log(gameState.allwords);
  // change to preveous state instaed + letter
  function AddLetter(letter) {
    dispach({ type: "char", value: letter });
  }
  function RemoveLetter() {
    if (gameState.allwords.length > 0 && gameState.allwords.length % 5 !== 0) {
      dispach({ type: "del" });
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
  }, [gameState.allwords]);

  // if (gameState.allwords.length % 5 === 0 && gameState.allwords.length > 0) {
  // }

  // useEffect(() => {
  //   if (!WordHandler(gameState.allwords.slice(-5).toLowerCase())) {
  //     SetUserInputs(userInputs.slice(0, -5));
  //   }
  // }, [isfiveletters]);

  // if (isvalid) {
  //   let wordstyle = wordPainting(userInputs.slice(-5).toLowerCase());
  //   const currentGuesse = userInputs.slice(-5).split("");
  //   let currentobj = {};
  //   for (let i = 0; i < 5; i++) {
  //     currentobj[currentGuesse[i]] = wordstyle[i];
  //   }

  //   setRowStyle(prev => [...prev, ...wordstyle]);
  // }

  // if (userInputs.length % 5 === 0 && userInputs.length > 0) {
  //   if (!WordHandler(userInputs.slice(-5).toLowerCase())) {
  //     alert("not a valid word!");
  //     SetUserInputs(userInputs.slice(0, -5));
  //     setIsvalid(false);
  //   }
  //   setIsvalid(true);
  // }

  return (
    <div>
      <Header />
      <FullDisplay>
        <GameInputWrapper>
          <Row
            letterstodisplay={gameState.allwords.slice(0, 5)}
            // color={rowStyle.slice(0, 5)}
            newline={gameState.allwords.length === 0 ? true : false}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(5, 10)}
            newline={gameState.allwords.length === 5 ? true : false}
            // color={rowStyle.slice(5, 10)}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(10, 15)}
            newline={gameState.allwords.length === 10 ? true : false}
            // color={rowStyle.slice(10, 15)}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(15, 20)}
            newline={gameState.allwords.length === 15 ? true : false}
            // color={rowStyle.slice(15, 20)}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(20, 25)}
            newline={gameState.allwords.length === 20 ? true : false}
            // color={rowStyle.slice(20, 25)}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(25, 30)}
            newline={gameState.allwords.length === 25 ? true : false}
            // color={rowStyle.slice(25, 30)}
          />
        </GameInputWrapper>
        <KeyBoard
          // color={keyboardstyle}
          QWERTY={QWERTY}
          AddLetter={AddLetter}
          RemoveLetter={RemoveLetter}
        />
      </FullDisplay>
    </div>
  );
}
