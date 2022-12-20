import styled from "styled-components";

export const StyledCart = styled.div`
    border: 1px solid var(--color-gray-0);
    border-radius: 0 0 5px 5px;

    > div{
        height: 158px;

        border: 1px solid var(--color-gray-0);
        border-radius: 0 0 5px 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        > h2{
            font-weight: 700;
            font-size: 18px;
            color: var(--color-gray-600)
        }

        > span{
            font-weight: 400;
            font-size: 14px;
            color: var(--color-gray-300)
        }
    }
`