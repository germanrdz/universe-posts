import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

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

function Navigator () {
  const navigate = useNavigate();

  return (
    <Container>
      <button onClick={() => navigate(-1)}>{'<'}</button>
      <button onClick={() => navigate(1)}>{'>'}</button>
    </Container>
  )
}

export default Navigator;