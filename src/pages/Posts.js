import styled from "styled-components";
import useSWR from "swr";

import { H1 } from "../components/shared/Text";
import Post from "../components/posts/Post";
import Loading from "../components/shared/Loading";
import Card from "../components/shared/Card";

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;

  color: black;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

function Posts () {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );



  return (
    <Container>
      <H1>All Posts</H1>
      <Content>
        { !data && <Loading /> }
        { error && <Card>An error has ocurred :( </Card>}
        { data && data.map(post => (<Post key={post.id} post={post} />)) }
      </Content>
    </Container>
  );
}

export default Posts;