import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { HeaderContainer, List, ListItem } from "./styledHeader";

const Header = () => {
  return (
    <HeaderContainer>
      <List>
        <ListItem>
          <NavLink to={routes.COVID} style={{ color: "white" }}>
            Covid
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={routes.WEATHER} style={{ color: "white" }}>
            Weather
          </NavLink>
        </ListItem>
      </List>
    </HeaderContainer>
  );
};

export default Header;
