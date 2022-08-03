import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles/globalStyles';
import Layout from './components/global/Layout';
import AllPosts from './pages/AllPosts';
import SinglePost from './pages/SinglePost';
import AuthorPosts from './pages/AuthorPosts';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllPosts />} />
          <Route path="author/:authorId" element={<AuthorPosts />} />
          <Route path=":postId" element={<SinglePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
