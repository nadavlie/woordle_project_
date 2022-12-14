import KeyBoard from "./components/KeyBoard";
import styled from "styled-components";

export default function App() {
  // main sending properties for keyboard!
  const QWERTY = `QWERTYUIOPASDFGHJKLZXCVBNM`.split("");
  const Inputsingle = styled.div`
    justify-content: center;
    align-items: center;
    border: 2px solid #dee1e9;
    font-size: 28px;
    font-weight: 700;
    height: 15px;
    margin: 3px;
    text-transform: uppercase;
    width: 15px;
    border-radius: 5px;
    color: #393e4c;
    background: #fbfcff;
    //sup{top:-1.5em;width:0;font-size:11px
  `;
  const RowWrapper = styled.div`
    display: flex;
  `;
  const CompleteRow = (
    <RowWrapper>
      <Inputsingle />
      <Inputsingle />
      <Inputsingle />
      <Inputsingle />
      <Inputsingle />
    </RowWrapper>
  );

  return (
    <div>
      {CompleteRow}
      {CompleteRow}
      {CompleteRow}
      {CompleteRow}
      {CompleteRow}
      <KeyBoard QWERTY={QWERTY} />
    </div>
  );
}
