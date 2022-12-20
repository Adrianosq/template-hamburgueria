import styled from "styled-components";

export const StyledFormLogin = styled.form`
    max-width: 500px;
    width: 100%;
    height: 461px;
    padding: 20px;
    border: 2px solid var(--color-gray-0);
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    display: flex;
    flex-direction: column; 
    gap: 25px;

    > span{
        font-weight: 400;
        font-size: 14px;
        color: var(--color-gray-200);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`