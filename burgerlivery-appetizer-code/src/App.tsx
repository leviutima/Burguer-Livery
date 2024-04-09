import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./components";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyHamburgers = lazy(() => import("./pages/Hamburgers/Hamburgers"));
const LazyAppetizers = lazy(() => import("./pages/Appetizers/Appetizers"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyCheckout = lazy(() => import("./pages/Checkout/Checkout"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Carregando</h1>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/entradas" element={<LazyAppetizers />} />
          <Route path="/hamburgers" element={<LazyHamburgers />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/checkout" element={<LazyCheckout />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
