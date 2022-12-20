import { useContext } from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import { CartProductCard } from "./CartProductCard";
import { CartValueTotal } from "./CartValueTotal";
import { StyledCartProductList } from "./styled";

export function CartProductList() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <StyledCartProductList>
        {cartProducts.map((product) => (
          <CartProductCard key={product.id} product={product} /> 
        ))}
      </StyledCartProductList>
      <CartValueTotal />
    </>
  );
}
