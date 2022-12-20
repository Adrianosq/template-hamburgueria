import { AxiosError } from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginData } from "../../Pages/PageLogin/FormLogin";
import { iRegisterData } from "../../Pages/PageRegister/FormRegister";
import { api } from "../../services/api";
import { iErrorDefault, iUserContextProps, iUserContextValue } from "./types";

export const UserContext = createContext({} as iUserContextValue);

export function UserProvider({ children }: iUserContextProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const token = localStorage.getItem("@user");

  //   async function loadUser() {
  //     if (!token) {
  //       setLoading(false);
  //       return;
  //     } else {
  //       try {
  //         const { data } = await api.get(`/users/${1}`, {
  //           headers: {
  //             authorization: `Bearer ${token}`,
  //           },
  //         });
  //       //   setUser("200");
  //         //   navigate("/dashboard");
  //         console.log(data);
  //       } catch (error) {
  //         console.error(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //   }
  //   loadUser();
  // }, []);

  async function userLogin(data: iLoginData) {
    try {
      const response = await api.post("/login", data);

      // setUser(true);
      localStorage.setItem("@user", response.data.accessToken);

      toast.success("Login realizado com sucesso!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }

  async function userRegister(data: iRegisterData) {
    try {
      const response = await api.post<iRegisterData>("/users", data);

      toast.success("Cadastro Realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, userRegister, user, loading }}>
      {children}
    </UserContext.Provider>
  );
}
