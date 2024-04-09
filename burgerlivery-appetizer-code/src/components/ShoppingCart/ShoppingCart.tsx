import { useContext } from "react";
import OrderContext from "../../context/OrderContext";
import { ShoppingCartElement } from "./ShoppingCart.style";
import { priceFormat } from "../../helpers/priceFormat";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { hamburgerOrder, appettizerOrder, order, setOrder } =
    useContext(OrderContext);

  return (
    <ShoppingCartElement open={isOpen}>
      <h1>Carrinho de compras</h1>
      <div>
        {appettizerOrder.map((appettizer, index) => (
          <p key={index}>
            {appettizer.name} - {appettizer.size}{" "}
            {priceFormat(appettizer.value)}
          </p>
        ))}
      </div>
      <div>
        {hamburgerOrder.map((hamburger, index) => (
          <p key={index}>
            {hamburger.name} {priceFormat(hamburger.value)}
          </p>
        ))}
      </div>
      <div>
        <p>Total: {order.totalValue}</p>
      </div>
    </ShoppingCartElement>
  );
};
