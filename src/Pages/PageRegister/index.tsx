import { HeaderInfo } from "../../components/HeaderInfo";
import { FormRegister } from "./FormRegister";
import { StyledPageRegister } from "./styled";

export function PageRegister() {
  return (
    <StyledPageRegister>
      <HeaderInfo />
      <FormRegister />
    </StyledPageRegister>
  );
}
