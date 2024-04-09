import { createContext, useEffect, useState } from "react";

type OrderContextProps = {
  appettizer: [];
  hamburger: [];
  combo: [];
  dessert: [];
  beverage: [];
  totalValue: number;
};

const OrderContext = createContext<OrderContextProps>({});

interface OrderContextProviderProps {
  children: React.ReactNode;
}

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  const inicialOrder = {
    appettizer: [],
    hamburger: [],
    combo: [],
    dessert: [],
    beverage: [],
    totalValue: 0,
  };

  const [appettizerOrder, setAppettizerOrder] = useState([]);
  const [hamburgerOrder, setHamburgerOrder] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const [order, setOrder] = useState(inicialOrder);

  const sumValues = (arrayValues) => {
    return arrayValues.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      0
    )
  }

  const getPrices = (values) => {
    const result = values.map((item) => item.value); 
    return result;
  };

  useEffect(() => {
    const internalOrder = {
      ...order,
      ["hamburger"]: hamburgerOrder,
      ["appettizer"]: appettizerOrder,
      totalValue: sumValues(subTotal)
    };

    const subTotalHamburgers = sumValues(hamburgerOrder);
    const subTotalAppetizer = sumValues(appettizerOrder);
    const subtotal = subTotalHamburgers.concat(subTotalAppetizer);

    setOrder(internalOrder);
  }, [hamburgerOrder, appettizerOrder, setOrder]);

  return (
    <OrderContext.Provider
      value={{
        appettizerOrder,
        setAppettizerOrder,
        hamburgerOrder,
        setHamburgerOrder,
        order,
        setOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContextProvider };
export default OrderContext;
