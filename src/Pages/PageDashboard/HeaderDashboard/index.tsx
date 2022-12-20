import { StyledHeader } from "./styled";
import logo from "../../../assets/logo.svg";
import buttonLogout from "../../../assets/logout.png";
import buttonCart from "../../../assets/cart.png";
import lupa from "../../../assets/search.png";
import { ButtonCart, ButtonLogout } from "../../../styles/buttons";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Modal from "react-modal";
import { Cart } from "./Cart";
import { SubmitHandler, useForm } from "react-hook-form";

Modal.setAppElement("#root");

export interface iSearch{
  search: string;
}

export function HeaderDashboard() {
  const {
    filterSearch,
    logout,
    cartProducts,
    modalIsOpen,
    openModal,
    closeModal,
    buttonFilter, 
    resetSearch
  } = useContext(CartContext);

  const { register, handleSubmit, reset } = useForm<iSearch>({});

  const onSubmit: SubmitHandler<iSearch> = (data) => {
    filterSearch(data);
    reset()
  };
  return (
    <StyledHeader>
      <div className="container header">
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <img className="searchLup" src={lupa} alt="search" />
          {buttonFilter && (
            <button onClick={resetSearch} className="cleanButton">
              X
            </button>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
            <input
              type="text"
              className="searchInput"
              placeholder="Digitar Pesquisa"
              {...register("search")}
            />
            <button type="submit" className="buttonSearch">
              Pesquisar
            </button>
          </form>
          <ButtonCart onClick={openModal}>
            <img src={buttonCart} alt="logout" />
            <p>{cartProducts.length}</p>
          </ButtonCart>
          <ButtonLogout onClick={logout}>
            <img src={buttonLogout} alt="logout" />
          </ButtonLogout>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="modal-header">
          <h2>Carrinho de compras</h2>
          <button onClick={closeModal}>X</button>
        </div>
        <Cart />
      </Modal>
    </StyledHeader>
  );
}
