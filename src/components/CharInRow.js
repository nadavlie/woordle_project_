import styled from "styled-components";
const RowItemContainer = styled.div`
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  text-transform: uppercase;
  border-radius: 5px;
  width: 30px;
  text-align: center;
  height: 30px;
  border: 1.2px solid gray;
  line-height: 30px;
  ${(props) =>
    props.isActive ? "box-shadow: 0 0 0 5px rgba(21, 156, 228, 0.4)" : ""}
`;

export default function CharInRow(props) {
  return (
    <RowItemContainer isActive={props.isActive}>{props.item}</RowItemContainer>
  );
}
