import styled from "styled-components";
const CharInRow = styled.div`
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
  // padding-left: 16px;
  // padding-bottom: 2.5px;
  padding-left: 70px;
`;
const CompleteRow = (
  <RowWrapper>
    <CharInRow />
    <CharInRow />
    <CharInRow />
    <CharInRow />
    <CharInRow />
  </RowWrapper>
);

export default function Row(props) {
  return CompleteRow;
}
