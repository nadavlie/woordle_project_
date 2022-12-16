import CharInRow from "./CharInRow";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 50%;
`;

export default function Row(props) {
  return (
    <RowWrapper>
      <CharInRow letter={props.currentGuess[0]} />
      <CharInRow letter={props.currentGuess[1]} />
      <CharInRow letter={props.currentGuess[2]} />
      <CharInRow letter={props.currentGuess[3]} />
      <CharInRow letter={props.currentGuess[4]} />
    </RowWrapper>
  );
}
