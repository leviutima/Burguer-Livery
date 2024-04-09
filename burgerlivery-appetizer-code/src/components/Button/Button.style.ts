import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { colors } from "../../styles/colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inverse?: boolean;
  size?: "large" | "small" | undefined;
  variant?: "info" | "danger";
}

export const ButtonElement = styled.button<ButtonProps>`
  padding: 16px 32px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 22px;
  background-color: ${colors.primary.main};
  color: ${colors.text.title};
  cursor: pointer;
  &:hover {
    background-color: ${lighten(0.2, colors.primary.main)};
  }

  ${(props) =>
    props.inverse &&
    `
    background-color: transparent;
    color: ${colors.text.title};
    &:hover {
      color: ${colors.text.title};
      background-color: ${lighten(colors.primary.main)};
    }
  `}

  ${(props) =>
    props.size === "small" &&
    `
      padding: 12px 24px;
      font-size: 14px;
  `}

  ${(props) =>
    props.size === "large" &&
    `
      padding: 24px 32px;
      font-size: 18px;
  `}

  ${(props) =>
    props.variant === "info" &&
    `
    background-color: darkblue;
    color: white;
    &:hover {
      background-color: lightblue;
    }
  `}

  ${(props) =>
    props.variant === "danger" &&
    `
    background-color: darkred;
    color: white;
    &:hover {
      background-color: red
    }
  `}
`;
