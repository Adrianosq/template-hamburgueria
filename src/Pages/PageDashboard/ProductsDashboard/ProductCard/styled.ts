import styled from "styled-components";

export const StyledCardProduct = styled.li`
    width: 300px;
    height: 346px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    border: 2px solid var(--color-gray-20);
    gap: 12px;
    padding: 0 10px;

    .imageProduct{
        width: 170px;
        height: 170px;
    }

    .titleProduct{
        font-size: 18px;
        font-weight: 700;
        color: var(--color-gray-100)
    }

    .categoryProduct{
        font-weight: 400;
        font-size: 12px;
        color: var(--color-gray-50)
    }

    .priceProduct{
        font-size: 14px;
        font-weight: 600;
        color: var(--color-primary);
    }

    .buttonProduct{
        width: 106px;
        height: 40px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 8px;

        font-weight: 600;
        font-size: 14px;
        color: var(--color-white);

        cursor: pointer;
    }
`