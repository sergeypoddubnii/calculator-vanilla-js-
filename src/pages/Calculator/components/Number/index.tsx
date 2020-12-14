import React, { MouseEvent } from "react";

interface NumberProps {
  value: number;
}

const Number = ({ value }: NumberProps) => {
  const handleClick = (e: MouseEvent) => {};
  return (
    <>
      <button type="button" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

export default Number;
