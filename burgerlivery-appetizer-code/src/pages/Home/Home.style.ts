import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const HomeWrapperElement = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 73px);
  background-color: ${colors.backgound.main};
`;

export const HomeActionContentElement = styled.div`
  flex-grow: 1;
  & h1 {
    line-height: 1.2;
    margin-bottom: 1rem;
    font-size: 3.5rem;
    font-weight: 800;
    color: ${colors.text.title};
  }

  & p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.text.main};
  }
`;

export const HomeBgImage = styled.img`
  width: 96%;
  flex-grow: 0;
  clip-path: ellipse(30.84% 43.79% at 62.7% 50.2%);
  @media (min-width: 1640px) {
    width: 100%;
  }
`;
