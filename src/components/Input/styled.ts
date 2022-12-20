import styled from "styled-components";

export const StyledInput = styled.div`
    position: relative;
    
    > label{
        position: absolute;
        top: -7px;
        left: 15px;
        background-color: var(--color-white);
        font-weight: 400;
        font-size: 12px;
        color: var(--color-gray-200)
    }
    > input{
        max-width: 452px;
        width: 100%;
        height: 60px;

        border: 2px solid var(--color-gray-600);
        border-radius: 8px;
        padding: 15px;
    }

    > p{
        color: var(--color-negative);
        font-weight: 400;
        font-size: 12px;
    }
`