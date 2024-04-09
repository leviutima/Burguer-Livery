import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ShoppingCart } from "..";
import { ShoppingCartButton, UserMenuElement } from "./UserMenu.style";
import ShoppingCartIcon from "../../assets/shoppingCart.svg";
// import OrderContext from "../../context/OrderContext";

export const UserMenu = () => {
  // const { hamburgerOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const token = sessionStorage.getItem("userToken");

  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <UserMenuElement>
      {!token ? (
        <>
          <Button size="small" onClick={() => {}}>
            Cadastre-se
          </Button>
          <Button size="small" inverse onClick={() => {}}>
            Login
          </Button>
        </>
      ) : (
        <>
          <span>Meus pedidos</span>
          <span>Ubirajara</span>
          <span onClick={handleLogout}>Sair</span>
        </>
      )}
      <ShoppingCartButton onClick={handleOpen}>
        <img src={ShoppingCartIcon} alt="" />
      </ShoppingCartButton>
      <ShoppingCart
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </UserMenuElement>
  );
};
