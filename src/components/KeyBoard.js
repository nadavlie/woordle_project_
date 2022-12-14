// a list of keyboard letters and controld-->
// -->will send each button to unique dynamic style using styled!
// -->return the keyboard nicely
import { Button } from "./Button";

export default function keyBoard(props) {
  return (
    <div>
      {props.QWERTY.map((item) => (
        <Button letter={item} />
      ))}
    </div>
  );
}
