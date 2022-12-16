import styled from "styled-components";
import React, { useRef } from "react";
const ButtonWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dee1e9;
    font-size: 4px;
    font-weight: 700;
    height: 15px;
    margin: 2px;
    text-transform: uppercase;
    width: 13px;
    border-radius: 3px;
    color: #393e4c;
    padding-left:3.3px;
    background: #fbfcff;
    //sup{top:-1.5em;width:0;font-size:11px
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
    }
  `;

// recievies each keyboard letter and adding it into a button element with uniquely styled class!
export default function Button(props) {
  const whatwasclicked = useRef();

  function ClickHandler() {
    props.AddLetter(props.letter);
    console.log(`im from button!--> ${whatwasclicked.current.value}`);
  }
  return (
    <ButtonWrapper>
      <button
        key={props.letter}
        value={props.letter}
        ref={whatwasclicked}
        onClick={ClickHandler}
      >
        {props.letter}
      </button>
    </ButtonWrapper>
  );
}
