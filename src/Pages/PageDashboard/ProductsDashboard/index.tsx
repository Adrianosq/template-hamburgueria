import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { ProductCard } from "./ProductCard";
import { StyledProductsList } from "./styled";

export function ProductsDashboard() {
  const {filtered} = useContext(CartContext)
  return (
    <StyledProductsList className="container">
      {filtered.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
        />
      ))}
    </StyledProductsList>
  );
}
