import styled from "styled-components";

const Actions = styled.div`
  text-align: right;
  margin-bottom: 16px;

  a, button {
    color: white;
    text-decoration: none;
    display: inline-block;
    margin-right: 1em;
  }

  a:hover, button:hover {
    text-decoration: underline;
  }
`;

export default Actions;