import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    height: 100vh;
    width: 100vw;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  
  #root {
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: scroll;
  }
`;

export default GlobalStyle;
