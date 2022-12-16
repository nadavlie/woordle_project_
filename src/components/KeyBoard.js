// a list of keyboard letters and controld-->
// -->will send each button to unique dynamic style using styled!
// -->return the keyboard nicely
import Button from "./Button";

import styled from "styled-components";
const Wraper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  height: 50%;
  border-color: #f2f2f2;
  border-style: solid;
  border-width: 3px;
  border-radius: 11.5px;
  width: 40%;
  margin-left: 260px;
  margin-top: 40px;
`;

export default function keyBoard(props) {
  // styling the Keyboard with styled extension!

  return (
    <Wraper>
      {props.QWERTY.map((item) => (
        <Button key={item} letter={item} AddLetter={props.AddLetter} />
      ))}
    </Wraper>
  );
}
