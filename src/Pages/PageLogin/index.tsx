import { HeaderInfo } from "../../components/HeaderInfo";
import { FormLogin } from "./FormLogin";
import { StyledPageLogin } from "./styled";

export function PageLogin() {
  return (
    <StyledPageLogin className="container">
      <FormLogin />
      <HeaderInfo />
    </StyledPageLogin>
  );
}
