import { StyledHeader } from "./styled";
import logo from "../../../assets/logo.svg";
import buttonLogout from "../../../assets/logout.png";
import buttonCart from "../../../assets/cart.png";
import { ButtonCart, ButtonLogout } from "../../../styles/buttons";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import Modal from "react-modal";
import { Cart } from "./Cart";

Modal.setAppElement("#root");

export function HeaderDashboard() {
  const { logout, cartProducts, modalIsOpen, openModal, closeModal } =
    useContext(CartContext);
  return (
    <StyledHeader>
      <div className="container header">
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <form className="searchForm">
            <input
              type="text"
              className="searchInput"
              placeholder="Digitar Pesquisa"
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
