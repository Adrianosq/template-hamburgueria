import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginData } from "../../Pages/PageLogin/FormLogin";
import { iRegisterData } from "../../Pages/PageRegister/FormRegister";
import { api } from "../../services/api";
import { iUserContextProps, iUserContextValue } from "./types";

export const UserContext = createContext({} as iUserContextValue);

export function UserProvider({ children }: iUserContextProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@user");

    async function loadUser() {
      if (!token) {
        setLoading(false);
        return;
      } else {
        try {
          const { data } = await api.get(`/users/${1}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(true);
          navigate("/dashboard");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    }
    loadUser();
  }, []);

  async function userLogin(userData: iLoginData) {
    try {
      const {data} = await api.post("/login", userData);

      setUser(true);
      localStorage.setItem("@user", data.accessToken);

      toast.success("Login realizado com sucesso!");
      console.error(data)

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      toast.error("Não foi possivel efetuar o login!")
      console.error(error)
    } 
  }

  async function userRegister(data: iRegisterData) {
    try {
      const response = await api.post("/users", data);

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
