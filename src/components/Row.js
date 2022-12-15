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
      <CharInRow />
      <CharInRow />
      <CharInRow />
      <CharInRow />
      <CharInRow />
    </RowWrapper>
  );
}
