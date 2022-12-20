import styled from "styled-components";
const ButtonWrapper = styled.button`
  box-sizing: border-box;
  line-height: 40px;
  font-size: 12px;
  text-align: center;
  width: 40px;
  color: #555;
  cursor: pointer;
  margin: 0 2.9px;
  height: 40px;
  border-color: #f2f2f2;
  border-style: solid;
  text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;
  border-width: 1px;
  border-radius: 7.5px;
  background: -webkit-linear-gradient(
    top,
    #f9f9f9 0%,
    #d2d2d2 80%,
    #c0c0c0 100%
  );
  font-family: sans-serif;
  display: inline-block;
  transition: box-shadow 0.3s ease, transform 0.15s ease;
  box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 6px 0 #c0c0c0,
    0 8px 17px rgba(#444, 0.4), 2px 1px 4px rgba(#444, 0.25),
    -2px 1px 4px rgba(#444, 0.25), 0 9px 16px rgba(#444, 0.1);

  &:hover,
  &:focus {
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 4px 0 #c0c0c0,
      0 2px 35px rgba(#444, 0.3), 2px 2px 4px rgba(#444, 0.25),
      -2px 2px 4px rgba(#444, 0.25), 0 7px 4px rgba(#444, 0.1);
    transform: translateY(2px);
  }

  &:active {
    box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 0 0 #c0c0c0,
      0 0px 30px rgba(#444, 0.15), 2px 2px 4px rgba(#444, 0.25),
      -2px 2px 4px rgba(#444, 0.25), 0 0px 4px rgba(#444, 0.25);
    transform: translateY(4px);
  }
`;

// recievies each keyboard letter and adding it into a button element with uniquely styled class!

export default function Button(props) {
  function ClickHandler() {
    if (props.letter !== "del") {
      props.AddLetter(props.letter);
    } else {
      props.RemoveLetter();
    }
  }
  return (
    <ButtonWrapper
      key={props.letter}
      value={props.letter}
      onClick={ClickHandler}
    >
      {props.letter}
    </ButtonWrapper>
  );
}
