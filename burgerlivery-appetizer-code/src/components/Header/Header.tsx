import {
  HeaderElement,
  HeaderWrapperElement,
  LogoElement,
} from "./Header.styles";
import Logo from "../../assets/hamburger-color.png";
import { MainMenu, UserMenu } from "..";

export const Header = () => {
  return (
    <HeaderElement>
      <HeaderWrapperElement>
        <LogoElement to="/">
          <img src={Logo} alt="Burgerlivery Logo" />
          Burgerlivery
        </LogoElement>

        <MainMenu />
        <UserMenu />
      </HeaderWrapperElement>
    </HeaderElement>
  );
};
