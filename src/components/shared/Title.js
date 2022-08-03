import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { H1 } from  "./Text";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
`;

const Navigator = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  button {
    font-size: 3em;
    color: #FFF;
    
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline;
    margin: 0;
    padding: 0;
  }
`;

function Title ({ text }) {
  const navigate = useNavigate();

  return (
    <Container>
      <H1>{ text }</H1>
      <Navigator>
        <button onClick={() => navigate(-1)}>{'<'}</button>
        <button onClick={() => navigate(1)}>{'>'}</button>
      </Navigator>
    </Container>
  );
};

export default Title;
