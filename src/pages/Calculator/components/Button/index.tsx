import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Btn } from "./styledButton";
// import KeyboardEventHandler from "react-keyboard-event-handler";
import {
  updateCurrentValue,
  addValueToMemory,
} from "../../../../redux/calculator/action";

interface NumberProps {
  value: string;
}

const Button = ({ value }: NumberProps) => {
  const dispath = useDispatch();
  const btnRef = useRef();

  const handleClick = () => {
    dispath(updateCurrentValue(value));
  };

  return (
    <>
      <Btn type="button" ref={btnRef} onClick={handleClick}>
        {value}
      </Btn>
    </>
  );
};

export default Button;
