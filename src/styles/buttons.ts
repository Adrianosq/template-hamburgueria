import styled from "styled-components";

export const ButtonLogin = styled.button`
    width: 100%;
    max-width: 452px;
    height: 60px;
    padding: 0px 40px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    color: var(--color-white);

    cursor: pointer;
`

export const ButtonCadastrar = styled.button`
    width: 100%;
    max-width: 452px;
    height: 60px;
    padding: 0px 40px;
    background-color: var(--color-gray-0);
    border: 1px solid var(--color-gray-0);
    border-radius: 8px;

    cursor: pointer;

    > a{
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: var(--color-gray-200);
    }
`
export const ButtonLogout = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`

export const ButtonCart = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;

    position: relative;

    > p{
        width: 20px;
        height: 24px;
        background-color: var(--color-primary);
        border-radius: 7px;

        font-weight: 900;
        font-size: 14px;
        color: var(--color-white);

        display: flex;
        align-items: center;
        justify-content: center;

        top: -15px;
        position: absolute;
        right: -10px;
    }
`

export const ButtonCartDelete = styled.button`
    background-color: transparent;
    border: none;

    cursor: pointer;
    
    > img{
        width: 11px;
        height: 14px;
    }
`