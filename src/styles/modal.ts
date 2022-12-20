import { createGlobalStyle } from "styled-components";

export const Modal = createGlobalStyle`

  .modal-overlay{
    background-color: rgba(0,0,0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0;
    height: 50px;
    background-color: var(--color-primary);
    padding: 10px;
    
    > h2{
        font-weight: 700;
        font-size: 18px;
        color: var(--color-white)
    }

    > button{
        font-weight: 600;
        font-size: 16px;
        color: var(--color-white);
        background-color: transparent;
        border: none;
        
        cursor: pointer;
    }
}

.modal-content{
    width: 90%;
    max-width: 500px;
    border-radius: 5px;
    background-color: var(--color-white);
}
`