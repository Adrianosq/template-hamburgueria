import styled from "styled-components";

export const StyledValueTotalCart = styled.div`
  width: 100%;
  height: 122px;
  padding: 16px 0 0;

  .valueTotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
  }

  .valueTotal > h2 {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-gray-600);
  }

  .valueTotal > span {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-gray-300);
  }

  button {
    margin-top: 30px;
    background-color: var(--color-gray-100);
    border: none;
    width: 100%;
    height: 60px;

    font-weight: 600;
    font-size: 16px;
    color: var(--color-gray-300);

    cursor: pointer;
  }
`;
