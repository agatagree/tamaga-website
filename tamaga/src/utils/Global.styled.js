import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  body{
    color: var(--color-main-blue);
  }

  :root {
    --color-main-blue: #012B55;
    --color-lighter-blue: #3a5382;
    --color-light-blue: #7190c9;
    --color-dark-blue: #00002c;
    --color-dark-grey: #bcbcbc;
    --color-main-grey: #eeeeee;
    --color-light-grey: #ffffff;
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
