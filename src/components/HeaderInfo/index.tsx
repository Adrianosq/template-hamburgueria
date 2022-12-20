import { StyledHeaderInfo } from "./styled";
import logo from "../../assets/logo.svg"
import shoppingBag from "../../assets/shopping-bag.png"

export function HeaderInfo() {
    return (
        <StyledHeaderInfo>
            <img src={logo} alt="logo" />
            <div>
                <img src={shoppingBag} alt="bag" />
                <span>A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b> ingredientes.</span>
            </div>
        </StyledHeaderInfo>
    )
}