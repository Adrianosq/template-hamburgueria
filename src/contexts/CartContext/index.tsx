import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iCartContextProps, iCartContextValue, iProducts } from "./types";

export const CartContext = createContext({} as iCartContextValue);

export function CartProvider({ children }: iCartContextProps) {
  const [products, setProducts] = useState<iProducts[]>([]);
  const [filtered, setFiltered] = useState<iProducts[]>([]);
  const [cartProducts, setCartProducts] = useState<iProducts[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [counterProductCart, setCounterProductCart] = useState(0);
  const [buttonFilter, setButtonFilter] = useState(false);
  const [triggerGoList, setTriggerGoList] = useState<boolean>(false);

  const goList= () => setTriggerGoList(!triggerGoList);

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
        
      } catch (error) {
        console.error(error);
      }
    }
    getAllProducts();
  }, []);

  // function filterSearch(filter) {
  //   const productFiltered = products.filter((product) =>
  //     product.name.toLowerCase().includes(filter.description.toLowerCase())
  //   );
  //   if(productFiltered.length > 0){
  //     setFiltered(productFiltered);
  //     setButtonFilter(true);
  //   } else{
  //     toast.warn("Produto não encontrado!")
  //   }
   
  // }

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

  useEffect(() =>{

  }, [])
  function addProductQuantCart(data: iProducts) {
    const copyCartProducts = [...cartProducts]

    const item = copyCartProducts.find(product => product.id === data.id)

    if(!item){
      copyCartProducts.push({qtd: 1})
      console.log("oi")
    } else{
      item.qtd = item.qtd === undefined ? 0 : + 1
      console.log(copyCartProducts)

    }
    setCartProducts(copyCartProducts)
    goList()
  }

  function subProductQuantCart() {
    setCounterProductCart(counterProductCart - 1);
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
        counterProductCart,
        triggerGoList, goList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
