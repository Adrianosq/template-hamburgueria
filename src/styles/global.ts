import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
     * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  :root{
    --color-primary: #27AE60;
    --color-secondary: #EB5757;

    --color-gray-600: #333333;
    --color-gray-300: #828282;
    --color-gray-200: #999999;
    --color-gray-100: #e0e0e0;
    --color-gray-0: #f5f5f5;
    --color-white: #FFFFFF;
    
    --color-sucess: #168821;
    --color-warning: #ffcf07;
    --color-negative: #e60000;
    --color-information: #155bcb;
  }

  .container{
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
        .container{
          width: 95%;
        }
    }
`;
