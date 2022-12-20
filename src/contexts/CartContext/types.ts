export interface iCartContextProps {
    children: React.ReactNode
}

export interface iProducts{
    id?: number;
    name?: string;
    img?: string;
    price?: number;
    category?: string;
    qtd?: number | undefined;
}

export interface iCartContextValue{
    products: iProducts[];
    cartProducts: iProducts[];
    modalIsOpen: boolean;
    logout: () => void;
    addProductCart: (products: iProducts) => void;
    openModal: () => void;
    closeModal: () => void;
    removeAllProductCart: () => void;
    removeProductCart: (products: iProducts) => void;
    addProductQuantCart: (products: iProducts) => void;
    subProductQuantCart: (products: iProducts) => void;
    counterProductCart: number;
    triggerGoList: boolean;
    goList: () => void;
}