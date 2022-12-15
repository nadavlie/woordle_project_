// recievs a list of items and uniquely design each according to his function-->
// --> of the game itself-->
// --> special keys will be enter and delete! with uniwue styling!
// dosnt import nothing only exports!

import styled from "styled-components";
const Button315 = styled.button`
    justify-content: center;
    align-items: center;
    border: 2px solid #dee1e9;
    font-size: 7px;
    font-weight: 700;
    height: 15px;
    margin: 2px;
    text-transform: uppercase;
    width: 15px;
    border-radius: 5px;
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

export default function Button(props) {
  // styling the button with styled extension!

  function ClickHandler() {
    props.down(props.letter);
  }
  return <Button315 onClick={ClickHandler}>{props.letter}</Button315>;
}
