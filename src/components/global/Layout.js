import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Content from './Content';

const Container = styled.div``;

function Layout () {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;