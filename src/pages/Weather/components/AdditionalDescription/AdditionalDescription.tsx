import React from "react";
import {
  Wrapper,
  List,
  ListItem,
  ItemTitle,
  ItemValue,
} from "./styledAdditionalDescription";

const AdditionalDescription = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <ItemTitle>SunRise</ItemTitle>
          <ItemValue>10:00</ItemValue>
        </ListItem>
        <ListItem>
          <ItemTitle>SunRise</ItemTitle>
          <ItemValue>10:00</ItemValue>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default AdditionalDescription;
