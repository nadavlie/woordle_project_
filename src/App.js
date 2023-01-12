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
  const [gameState, dispach] = useReducer(gameLogic, {
    allwords: "",
    g1: [],
    g2: [],
    g3: [],
    g4: [],
    g5: [],
    g6: [],
    leterwordstyle: {},
  });
  console.log(gameState.leterwordstyle);
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

  useEffect(() => {
    if (gameState.allwords.length % 5 === 0) {
      dispach({ type: "wordwasentered" });
    }
  }, [gameState.allwords]);

  return (
    <div>
      <Header />
      <FullDisplay>
        <GameInputWrapper>
          <Row
            letterstodisplay={gameState.allwords.slice(0, 5)}
            color={gameState.g1.length > 0 ? gameState.g1 : ""}
            newline={gameState.allwords.length === 0 ? true : false}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(5, 10)}
            newline={gameState.allwords.length === 5 ? true : false}
            color={gameState.g2.length > 0 ? gameState.g2 : ""}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(10, 15)}
            newline={gameState.allwords.length === 10 ? true : false}
            color={gameState.g3.length > 0 ? gameState.g3 : ""}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(15, 20)}
            newline={gameState.allwords.length === 15 ? true : false}
            color={gameState.g4.length > 0 ? gameState.g4 : ""}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(20, 25)}
            newline={gameState.allwords.length === 20 ? true : false}
            color={gameState.g5.length > 0 ? gameState.g5 : ""}
          />
          <Row
            letterstodisplay={gameState.allwords.slice(25, 30)}
            newline={gameState.allwords.length === 25 ? true : false}
            color={gameState.g6.length > 0 ? gameState.g6 : ""}
          />
        </GameInputWrapper>
        <KeyBoard
          colorobj={gameState.leterwordstyle}
          QWERTY={QWERTY}
          AddLetter={AddLetter}
          RemoveLetter={RemoveLetter}
        />
      </FullDisplay>
    </div>
  );
}
