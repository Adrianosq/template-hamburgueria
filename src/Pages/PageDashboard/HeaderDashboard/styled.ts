import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  height: 80px;
  display: flex;
  padding: 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .searchForm {
    position: relative;
    display: flex;
    align-items: center;
  }

  .searchInput {
    background-color: var(--color-white);
    padding: 0 10px;
    min-width: 265px;
    width: 365px;
    height: 60px;
    border: 2px solid var(--color-gray-100);
    border-radius: 8px;

    &::placeholder {
      color: var(--color-gray-100);
      font-weight: 600;
      font-size: 1rem;
    }
  }

  .buttonSearch {
    position: absolute;
    right: 5px;

    width: 107px;
    height: 40px;
    padding: 0 20px;

    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 8px;

    font-weight: 500;
    font-size: 14px;
    color: var(--color-white);

    cursor: pointer;
  }

  .cleanButton {
    width: 30px;
    height: 30px;
    background-color: var(--color-primary);
    border-radius: 8px;
    border: 2px solid var(--color-primary);
    font-weight: 500;
    font-size: 14px;
    color: var(--color-white);
    margin-right: 10px;
    position: absolute;
    z-index: 2;
    top: -12px;
    left: -15px;

    cursor: pointer;
  }

  .search {
    display: flex;
    align-items: center;
    position: relative;
    gap: 15px;
  }

  .searchLup {
    display: none;
  }
  @media (max-width: 700px) {
    height: 110px;

    .header {
      flex-direction: column;
    }

    .search {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 10px;
      flex-direction: row;
    }

    .searchForm {
      display: none;
    }
    .searchLup {
      display: block;
    }
  }
`;
