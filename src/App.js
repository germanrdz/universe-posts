import GlobalStyle from './styles/globalStyles';
import Layout from './components/global/Layout';
import Content from './components/global/Content';

function App() {
  return (
    <div id="App">
      <GlobalStyle />
      <Layout>
        <Content>
          This is content
        </Content>
      </Layout>
    </div>
  );
}

export default App;
