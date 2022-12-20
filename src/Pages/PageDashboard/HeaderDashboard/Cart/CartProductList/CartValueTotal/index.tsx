import { useContext } from "react";
import { CartContext } from "../../../../../../contexts/CartContext";
import { StyledValueTotalCart } from "./styled";

export function CartValueTotal(){
    const {cartProducts, removeAllProductCart} = useContext(CartContext)
    const reduce = cartProducts.reduce(((accumulator, currentValue) => accumulator + currentValue.price), 0);
    return(
        <StyledValueTotalCart>
            <div className="valueTotal">
        <h2>Total</h2>
        <span>R$ ${reduce.toFixed(2)}</span>
      </div>
      <button onClick={removeAllProductCart}>Remover Todos</button>
        </StyledValueTotalCart>
            
    )
}