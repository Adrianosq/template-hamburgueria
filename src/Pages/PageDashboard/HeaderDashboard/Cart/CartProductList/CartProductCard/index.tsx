import { iProducts } from "../../../../../../contexts/CartContext/types";
import { StyledCartProductCard } from "./styled";
import buttonLixeira from "../../../../../../assets/lixeira.png";
import { ButtonCartDelete } from "../../../../../../styles/buttons";
import { useContext } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";

export function CartProductCard(props: any) {
  const { removeProductCart, addProductQuantCart, subProductQuantCart, goList } =
    useContext(CartContext);
  const product: iProducts = props.product;   

  return (
    <StyledCartProductCard>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <div>
        <button
          onClick={() => {
            subProductQuantCart(product), goList();
          }}
        >
          -
        </button>
        <p>{product.qtd}</p>
        <button
          onClick={() => {
            addProductQuantCart(product);
            goList();
          }}
        >
          +
        </button>
      </div>

      <ButtonCartDelete onClick={() => removeProductCart(product)}>
        <img src={buttonLixeira} alt="lixeira" />
      </ButtonCartDelete>
    </StyledCartProductCard>
  );
}
