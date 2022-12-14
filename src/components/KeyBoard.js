// a list of keyboard letters and controld-->
// -->will send each button to unique dynamic style using styled!
// -->return the keyboard nicely
import { Button } from "./Button";
import yosi from "styled-components";

export default function keyBoard(props) {
  const Wraper = yosi.div`
    display:grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 4px;
  
    height:30%;
    width:40%;
    border-color: #f2f2f2;
    border-style: solid;
    border-width: 8px;
    border-radius: 11.5px;
    
        `;
  return (
    <Wraper>
      {props.QWERTY.map((item) => (
        <Button letter={item} />
      ))}
    </Wraper>
  );
}
