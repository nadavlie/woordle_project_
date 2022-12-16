import CharInRow from "./CharInRow";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 50%;
`;

export default function Row(props) {
  console.log(`props->${props}`);
  console.log(`props.a->${props.a}`);
  console.log(`props.a()->${props.a()}`);

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
