import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const MainMenu = styled.nav``;

export const MainMenuListElement = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MainMenuListItemElement = styled.li`
  margin: 0;
  padding: 0 8px;
  list-style: none;
  font-size: 14px;
  font-weight: 600;

  & a {
    font-weight: inherit;
    color: ${colors.text.title};
  }
`;
