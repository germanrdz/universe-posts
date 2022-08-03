import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: #940021;
    color: #FFFFFF;
    font-size: 16px;

    font-family: 'Roboto', sans-serif;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
  }

  a {
    color: #000000;
  }
`;
 
export default GlobalStyle;