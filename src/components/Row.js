import CharInRow from "./CharInRow";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: inline-flex;
  gap: 6px;
  margin-bottom: 5px;
`;

export default function Row(props) {
  if (!props.color) {
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
  } else {
    return (
      <RowWrapper>
        <CharInRow item={props.letterstodisplay[0]} color={props.color[0]} />
        <CharInRow item={props.letterstodisplay[1]} color={props.color[1]} />
        <CharInRow item={props.letterstodisplay[2]} color={props.color[2]} />
        <CharInRow item={props.letterstodisplay[3]} color={props.color[3]} />
        <CharInRow item={props.letterstodisplay[4]} color={props.color[4]} />
      </RowWrapper>
    );
  }
}
