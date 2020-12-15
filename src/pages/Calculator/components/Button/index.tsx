import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Btn } from "./styledButton";
import {
  updateCurrentValue,
  addValueToMemory,
} from "../../../../redux/calculator/action";

interface NumberProps {
  value: string;
}

const Button = ({ value }: NumberProps) => {
  const dispath = useDispatch();

  const handleClick = (e: MouseEvent) => {
    dispath(updateCurrentValue(value));
  };

  return (
    <>
      <Btn type="button" onClick={handleClick}>
        {value}
      </Btn>
    </>
  );
};

export default Button;
