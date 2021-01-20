import React, { FC } from "react";
import { Container, Title, Value, LastUpDate } from "./styledCard";

interface CardProps {
  title: string;
  value: string;
  date: string;
}

const Card: FC<CardProps> = ({ title, value, date }) => {
  return (
    <>
      <Container title={title}>
        <Title>{title}:</Title>
        <Value>{value}</Value>
        <LastUpDate>{date}</LastUpDate>
      </Container>
    </>
  );
};

export default Card;
