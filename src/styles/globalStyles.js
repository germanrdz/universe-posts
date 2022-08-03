import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
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