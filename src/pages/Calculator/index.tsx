import React from "react";
import Button from "./components/Button";
import { List, Container, Screen, CurrentValue } from "./CalculatorStyled";
import { useSelector } from "react-redux";
import {
  getAllButtons,
  getCurrentValue,
  getMemory,
} from "../../redux/calculator/selectors";

const Calculator = () => {
  const buttons = useSelector(getAllButtons);
  const currentValue = useSelector(getCurrentValue);
  const memory = useSelector(getMemory);

  const numberBtns = buttons.map((btn: string) => {
    return <Button key={btn} value={btn} />;
  });

  return (
    <Container>
      <Screen>
        <CurrentValue>{memory}</CurrentValue>
        <CurrentValue>{currentValue}</CurrentValue>
      </Screen>
      <List>{numberBtns}</List>
    </Container>
  );
};

export default Calculator;
