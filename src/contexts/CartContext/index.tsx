import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iSearch } from "../../Pages/PageDashboard/HeaderDashboard";
import { api } from "../../services/api";
import { iCartContextProps, iCartContextValue, iProducts } from "./types";

export const CartContext = createContext({} as iCartContextValue);

export function CartProvider({ children }: iCartContextProps) {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [filtered, setFiltered] = useState<iProducts[]>([]);
  const [cartProducts, setCartProducts] = useState<iProducts[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonFilter, setButtonFilter] = useState(false);
  const [triggerGoList, setTriggerGoList] = useState<boolean>(false);

  const goList = () => setTriggerGoList(!triggerGoList);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllProducts() {
      const token = localStorage.getItem("@user");
      try {
        const response = await api.get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        setFiltered(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllProducts();
  }, []);

  function filterSearch({ search }: iSearch) {
    const productFiltered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    if (productFiltered.length > 0) {
      setFiltered(productFiltered);
      setButtonFilter(true);
    } else {
      toast.warn("Produto não encontrado!");
    }
  }

  function resetSearch() {
    setFiltered(products);
    setButtonFilter(false);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function addProductCart(productCart: iProducts) {
    if (cartProducts.includes(productCart)) {
      toast.error(`${productCart.name} já foi adicionado ao carrinho!`);
    } else {
      setCartProducts([...cartProducts, productCart]);
      toast.success(`${productCart.name} adicionado com sucesso no carrinho!`);
    }
  }

  function removeProductCart(productRemoveCart: iProducts) {
    const newCart = cartProducts.filter(
      (product) => product !== productRemoveCart
    );
    setCartProducts(newCart);
    toast.success(`${productRemoveCart.name} removido do carrinho!`);
  }

  function removeAllProductCart() {
    setCartProducts([]);
    toast.success("Todos os produtos removidos com sucesso!");
  }

  useEffect(() => {}, []);
  function addProductQuantCart(data: iProducts) {
    if (!data.qtd) data.qtd = 1;
    if (data.qtd) {
      data.qtd = data.qtd + 1;
    }
  }

  function subProductQuantCart(data: iProducts) {
    if (data.qtd && data.qtd !== 1) data.qtd = data.qtd - 1;
  }

  function logout() {
    navigate("/login");
    localStorage.clear();
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartProducts,
        modalIsOpen,
        addProductCart,
        logout,
        openModal,
        closeModal,
        removeAllProductCart,
        removeProductCart,
        addProductQuantCart,
        subProductQuantCart,
        triggerGoList,
        goList,
        filterSearch,
        filtered,
        buttonFilter,
        resetSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
