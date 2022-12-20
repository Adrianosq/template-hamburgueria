import { useContext } from "react"
import { CartContext } from "../../../../contexts/CartContext"
import { CartProductList } from "./CartProductList"
import { StyledCart } from "./styled"

export function Cart(){
    const {cartProducts} = useContext(CartContext)
    return(
        <StyledCart>
        {
            cartProducts.length === 0 ? 
            <div>
                <h2>Sua sacola está vazia</h2>
                <span>Adicione itens</span>
            </div>
            :
            <CartProductList />
        }
        </StyledCart>
        
    )
}