// a list of keyboard letters and controld-->
// -->will send each button to unique dynamic style using styled!
// -->return the keyboard nicely
import Button from "./Button";
import yosi from "styled-components";
const Wraper = yosi.div`
display:grid;
grid-template-columns: repeat(10, 1fr);
gap: 4px;
height:50%;
border-color: #f2f2f2;
border-style: solid;
border-width: 8px;
border-radius: 11.5px;
// padding-left:30px;
// padding-right:54px;
// margin-left:30px;
// margin-right:30px;
    `;

export default function keyBoard(props) {
  // styling the Keyboard with styled extension!

  return (
    <Wraper>
      {props.QWERTY.map((item) => (
        <Button letter={item} down={props.fun} key={item} />
      ))}
    </Wraper>
  );
}
