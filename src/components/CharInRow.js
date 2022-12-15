import styled from "styled-components";
const CharInsideARow = styled.p`
  padding-left: 35%;
  margin-top: 4px;
`;
export default function CharInRow(props) {
  return <CharInsideARow>{props.item}</CharInsideARow>;
}
