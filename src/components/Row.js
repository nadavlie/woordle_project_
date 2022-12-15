import styled from "styled-components";
import CharInRow from "./CharInRow";

const RowWrapper = styled.div`
  display: flex;
  // padding-left: 16px;
  // padding-bottom: 2.5px;
  padding-left: 70px;
`;
const CharInRowWrap = styled.div`
  justify-content: center;
  border: 2px solid #dee1e9;
  font-size: 6px;
  font-weight: 700;
  height: 15px;
  margin: 3px;
  text-transform: uppercase;
  border-radius: 5px;
  width: 15px;
  color: #393e4c;
  background: #fbfcff;
`;

export default function Row(props) {
  return (
    <RowWrapper>
      <CharInRowWrap>
        <CharInRow item={props.first} />
      </CharInRowWrap>
      <CharInRowWrap>
        <CharInRow />
      </CharInRowWrap>
      <CharInRowWrap>
        <CharInRow />
      </CharInRowWrap>
      <CharInRowWrap>
        <CharInRow />
      </CharInRowWrap>
      <CharInRowWrap>
        <CharInRow />
      </CharInRowWrap>
    </RowWrapper>
  );
}
