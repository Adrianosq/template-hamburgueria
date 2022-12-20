import styled from "styled-components";

export const StyledProductsList = styled.ul`
    height: 725px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 900px) {
     grid-template-columns: repeat(2, 1fr);
     display: flex;
     overflow: auto;
     height: auto; 
    }
    @media (max-width: 450px) {      
     grid-template-columns: 1fr;    
     display: flex;
     overflow: auto;
     height: auto; 
      
    }
`