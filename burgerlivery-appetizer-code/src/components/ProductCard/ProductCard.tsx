import { ProductCardElement } from "./ProductCard.style";

interface ProductCardProps {
  children: React.ReactNode;
}

export const ProductCard = ({ children }: ProductCardProps) => {
  return <ProductCardElement>{children}</ProductCardElement>;
};
