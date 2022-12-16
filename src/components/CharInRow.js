import styled from "styled-components";

const RowItemCont = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dee1e9;
  font-size: 9px;
  font-weight: 700;
  height: 24px;
  margin: 3px;
  text-transform: uppercase;
  width: 23px;
  border-radius: 5px;
  color: #393e4c;
  background: #fbfcff;
  justifty-items: center;
  padding-left: 4px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export default function CharInRow(props) {
  return <RowItemCont>{props.item}</RowItemCont>;
}
