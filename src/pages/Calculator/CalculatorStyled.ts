import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 600px;
  margin: 0 auto;
  padding: 0;
`;

export const Container = styled.div`
  padding: 0;
`;

export const Screen = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0 auto;
  border: 1px solid #d2d2d2;
  background: #f0f0f0;
`;

export const CurrentValue = styled.span`
  font-size: 45px;
  padding: 5px;
`;
