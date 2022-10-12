import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    color: var(--color-main-blue);
  }

  :root {
    --color-main-blue: #012B55;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
