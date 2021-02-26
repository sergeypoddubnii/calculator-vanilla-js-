import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  margin: 0 auto 15px;
  width: 50%;
  padding: 25px;
`;

export const Location = styled.div`
  font-size: 25px;
`;

export const CurrentDate = styled.div`
  font-weight: 200;
`;

export const TempContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const AddIndicators = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`;

export const AddIndicator = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ItemTitle = styled.span``;

export const ItemValue = styled.span``;
