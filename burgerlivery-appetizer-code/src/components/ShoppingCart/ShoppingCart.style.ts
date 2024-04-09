import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const ShoppingCartElement = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 450px;
  height: 100vh;
  padding: 16px;
  background-color: ${colors.commom.white};
  transform: translateX(100%);
  transition: transform 0.2s ease-out;

  ${(props) =>
    props.open === true &&
    `
    transform: translateX(0);
    `}
`;
