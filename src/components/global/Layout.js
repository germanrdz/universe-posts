import { Outlet } from 'react-router-dom';

import Content from './Content';

function Layout () {
  return (
    <Content>
      <Outlet />
    </Content>
  );
};

export default Layout;