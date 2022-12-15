import KeyBoard from "./components/KeyBoard";
import Row from "./components/Row";
import styled from "styled-components";

// hard coding the keyboard
const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("");
const RowsInputWrapper = styled.div`
  margin-left: 370px;
  margin-top: 50px;
`;

// const ContainerWrapper = styled.div`
//   margin: 90px;
//   width: 55%;
// `;

export default function App() {
  // let [currentGuess, setcurrentGuess] = useState("");

  // function UserInputHandler(letter) {
  //   setcurrentGuess(currentGuess + letter);
  //   another();
  // }
  // function another() {
  //   if (currentGuess.length > 2) {
  //     return Savta.createPortal(
  //       <button>goodJob</button>,
  //       document.getElementById("beforeroot")
  //     );
  //   }
  // }

  return (
    <div>
      <RowsInputWrapper>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </RowsInputWrapper>
      <KeyBoard QWERTY={QWERTY} />
    </div>
  );
}
