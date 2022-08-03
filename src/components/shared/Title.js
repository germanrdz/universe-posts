import styled from "styled-components";

import Navigator from "./Navigator";
import { H1 } from  "./Text";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
`;

function Title ({ text }) {
  return (
    <Container>
      <H1>{ text }</H1>
      <Navigator />
    </Container>
  );
};

export default Title;
