import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const TextFieldElement = styled.div`
  border: 1px solid ${colors.secondary.main};
  margin-bottom: 16px;
  padding: 16px 24px;
  border-radius: 32px;
  background-color: ${colors.commom.white};
  &:focus-within {
    outline: 1px solid ${colors.primary.main};
  }

  & label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${colors.text.title};
  }

  & input {
    width: 100%;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    outline: none;
  }
`;
