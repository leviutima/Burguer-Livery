import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { OrderContextProvider } from "./context/OrderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderContextProvider>
      <GlobalStyles />
      <App />
    </OrderContextProvider>
  </React.StrictMode>
);
