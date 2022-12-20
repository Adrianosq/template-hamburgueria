import { SetStateAction, Dispatch } from "react";
import { iLoginData } from "../../Pages/PageLogin/FormLogin";
import { iRegisterData } from "../../Pages/PageRegister/FormRegister";

export interface iUserContextProps {
    children: React.ReactNode
}
export interface iUserLogged{
    name: string;
    email: string;
    id: string;
}

export interface iUserContextValue{
    userLogin: (data: iLoginData) => void;
    userRegister: (data: iRegisterData) => void;
    user: boolean;
    loading: boolean;
}

