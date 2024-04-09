import { styled } from "styled-components";
import { darken } from "polished";
import { colors } from "../../styles/colors";

export const CategoryListElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 202px;
  height: 82px;
  padding: 16px 32px;
  text-align: center;
  color: ${colors.commom.white};
  font-size: 1.2rem;
  font-weight: 700;
  background: ${darken(0.15, colors.primary.main)};
  border-radius: 32px;
  box-shadow: 0px 4px 16px ${colors.secondary.main};
  cursor: pointer;
`;
