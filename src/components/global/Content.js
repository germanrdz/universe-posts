import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1em;
`;

function Content ({ children }) {
  return (<Container>{children}</Container>);
};

export default Content;