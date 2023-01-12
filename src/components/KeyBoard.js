// a list of keyboard letters and controld-->
// -->will send each button to unique dynamic style using styled!
// -->return the keyboard nicely
import Button from "./Button";

import styled from "styled-components";
const KeyBoardWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(10, 1fr);
  padding-top: 35px;
`;

export default function keyBoard(props) {
  // styling the Keyboard with styled extension!
  // developer.hasOwnProperty("isEmployed");

  return (
    <KeyBoardWrapper>
      {props.QWERTY.map(item => (
        <Button
          // color={props.color[item] ? props.color[item] : ""}
          key={item}
          letter={item}
          AddLetter={props.AddLetter}
          RemoveLetter={props.RemoveLetter}
        />
      ))}
    </KeyBoardWrapper>
  );
}
