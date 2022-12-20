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
      <CharInRow
        item={props.letterstodisplay[0] ? props.letterstodisplay[0] : ""}
        isActive={
          props.newline || props.letterstodisplay.length === 1 ? true : false
        }
      />
      <CharInRow
        item={props.letterstodisplay[1] ? props.letterstodisplay[1] : ""}
        isActive={props.letterstodisplay.length === 2 ? true : false}
      />
      <CharInRow
        item={props.letterstodisplay[2] ? props.letterstodisplay[2] : ""}
        isActive={props.letterstodisplay.length === 3 ? true : false}
      />
      <CharInRow
        item={props.letterstodisplay[3] ? props.letterstodisplay[3] : ""}
        isActive={props.letterstodisplay.length === 4 ? true : false}
      />
      <CharInRow
        item={props.letterstodisplay[4] ? props.letterstodisplay[4] : ""}
      />
    </RowWrapper>
  );
}
