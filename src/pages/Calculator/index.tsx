import React from "react";
import Number from "./components/Number";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Calculator = () => {
  const numberBtns = numbers.map((num: number) => {
    return <Number key={num} value={num} />;
  });
  return (
    <>
      <h1>calculator</h1>
      {numberBtns}
    </>
  );
};

export default Calculator;
