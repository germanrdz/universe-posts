import GlobalStyle from './styles/globalStyles';
import Layout from './components/global/Layout';
import Content from './components/global/Content';
import Posts from './pages/Posts';

function App() {
  return (
    <div id="App">
      <GlobalStyle />
      <Layout>
        <Content>
          <Posts />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
