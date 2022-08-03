import styled from "styled-components";

const H1 = styled.h1`
  color: #FECE20;
  font-family: 'Playfair Display', serif;
  font-size: 5em;
  margin: 16px;

  @media (max-width: 768px) {
    font-size: 3em;
  } 
`;

const H2 = styled.h2`
  color: #000;
  font-size: 2em;
  font-family: 'Playfair Display', serif;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  } 
`;

export {
  H1, H2 
}