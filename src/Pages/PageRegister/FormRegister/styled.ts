import styled from "styled-components";

export const StyledFormRegister = styled.form`
    max-width: 500px;
    width: 100%;
    padding: 20px;
    border: 2px solid var(--color-gray-0);
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    display: flex;
    flex-direction: column; 
    gap: 25px;

    .headerRegister{
        display: flex;
        align-items: center;
        justify-content: space-between;

        > a{
            font-weight: 500;
            font-size: 14px;
            color: var(--color-gray-300)
        }
    }
`