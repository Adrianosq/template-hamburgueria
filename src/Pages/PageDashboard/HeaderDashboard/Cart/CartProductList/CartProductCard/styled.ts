import styled from "styled-components";

export const StyledCartProductCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;

  position: relative;

  > img {
    width: 55px;
    height: 53px;
  }

  > h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--color-gray-600);

    position: absolute;
    top: 15px;
    left: 65px;
  }

  div{
    display: flex;
    flex-direction: row;
    height: 20px;

    position: absolute;
    top: 40px;
    left: 65px;
    gap: 12px;
  }
`;
