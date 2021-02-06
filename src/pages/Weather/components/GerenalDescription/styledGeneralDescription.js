import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  margin: 0 auto;
  width: 50%;
  height: 300px;
  padding: 25px;
`;

export const Location = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
`;

export const CurrentDate = styled.div`
  font-weight: 200;
`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Temp = styled.div`
  font-size: 30px;
`;

export const TempDescription = styled.div`
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
