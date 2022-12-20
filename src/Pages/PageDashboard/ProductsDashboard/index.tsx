import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { ProductCard } from "./ProductCard";
import { StyledProductsList } from "./styled";

export function ProductsDashboard() {
  const {products} = useContext(CartContext)
  return (
    <StyledProductsList className="container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </StyledProductsList>
  );
}
