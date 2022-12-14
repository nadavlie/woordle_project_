// recievs a list of items and uniquely design each according to his function-->
// --> of the game itself-->
// --> special keys will be enter and delete! with uniwue styling!
// dosnt import nothing only exports!
import React from "react";

import styled from "styled-components";

export function Button(props) {
  // styling the button with styled!
  const Button315 = styled.button`
      display: block;
      margin: 35vh auto;
      box-sizing: border-box;
      font-size: 16px;
      text-align: center;
      width: 30px;
      color: red;
      cursor: pointer;
      margin: 0 8px;
      border-color: #f2f2f2;
      border-style: solid;
      text-shadow: 0 0.5px 1px #777, 0 2px 6px #f2f2f2;
      border-width: 1px;
      border-radius: 10px;
      font-family: sans-serif;
      display: inline-block;
      transition: box-shadow 0.3s ease, transform 0.15s ease;
      box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 6px 0 #c0c0c0,
        0 8px 17px rgba(#444, 0.4), 2px 1px 4px rgba(#444, 0.25),
        -2px 1px 4px rgba(#444, 0.25), 0 9px 16px rgba(#444, 0.1);

    //   &:hover,
    //   &:focus {
    //     box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 4px 0 #c0c0c0,
    //       0 2px 35px rgba(#444, 0.3), 2px 2px 4px rgba(#444, 0.25),
    //       -2px 2px 4px rgba(#444, 0.25), 0 7px 4px rgba(#444, 0.1);
    //     transform: translateY(2px);
    //   }

    //   &:active {
    //     box-shadow: 0 0 1px #888, 0 1px 0 #fff, 0 0 0 #c0c0c0,
    //       0 0px 30px rgba(#444, 0.15), 2px 2px 4px rgba(#444, 0.25),
    //       -2px 2px 4px rgba(#444, 0.25), 0 0px 4px rgba(#444, 0.25);
    //     transform: translateY(4px);
    //   }
    }
  `;
  return (
    <div>
      <Button315>{props.letter}</Button315>
    </div>
  );
}
