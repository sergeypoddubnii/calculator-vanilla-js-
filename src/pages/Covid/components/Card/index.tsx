import React, { FC } from "react";
import { Container, Title, Value } from "./styledCard";

interface CardProps {
  title: string;
  value: string;
}

const Card: FC<CardProps> = ({ title, value }) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Container>
    </>
  );
};

export default Card;
