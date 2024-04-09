import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderElement = styled.header`
  padding: 16px 0;
  background-color: ${colors.backgound.main};
`;

export const HeaderWrapperElement = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const LogoElement = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${colors.text.title};

  img {
    width: 24px;
    margin-right: 8px;
  }
`;
