import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { iProducts } from "../../../../contexts/CartContext/types";
import { StyledCardProduct } from "./styled";

export function ProductCard(props: any) {
  const {addProductCart} = useContext(CartContext)
  const product: iProducts = props.product
  return (
    <StyledCardProduct>
      <img className="imageProduct" src={product.img} alt={product.name} />
      <h2 className="titleProduct">{product.name}</h2>
      <span className="categoryProduct">{product.category}</span>
      <span className="priceProduct">R$ ${product.price.toFixed(2)}</span>
      <button className="buttonProduct" onClick={() => addProductCart(product)}>Adicionar</button>
    </StyledCardProduct>
  );
}
