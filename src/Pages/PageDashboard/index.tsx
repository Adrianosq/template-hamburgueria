import { CartProvider } from "../../contexts/CartContext";
import { HeaderDashboard } from "./HeaderDashboard";
import { ProductsDashboard } from "./ProductsDashboard";
import { StyledDashboard } from "./styled";

export function PageDashboard() {
  return (
    <StyledDashboard>
      <CartProvider>
        <HeaderDashboard />
        <ProductsDashboard />
      </CartProvider>
    </StyledDashboard>
  );
}
