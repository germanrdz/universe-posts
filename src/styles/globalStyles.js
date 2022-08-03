import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto&family=Zen+Kaku+Gothic+Antique&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    background: #940021;
    color: #FFFFFF;

    font-family: 'Roboto', sans-serif;
    font-family: 'Zen Kaku Gothic Antique', sans-serif;
  }
`;
 
export default GlobalStyle;