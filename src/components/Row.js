import CharInRow from "./CharInRow";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: inline-flex;
  gap: 6px;
  margin-bottom: 5px;
`;

export default function Row(props) {
  return (
    <RowWrapper>
      <CharInRow item={props.a2[0] ? props.a2[0] : ""} />
      <CharInRow item={props.a2[1] ? props.a2[1] : ""} />
      <CharInRow item={props.a2[2] ? props.a2[2] : ""} />
      <CharInRow item={props.a2[3] ? props.a2[3] : ""} />
      <CharInRow item={props.a2[4] ? props.a2[4] : ""} />
    </RowWrapper>
  );
}
