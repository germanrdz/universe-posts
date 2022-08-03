import styled from "styled-components";
import useSWR from "swr";

import fetcher from '../utils/fetcher';
import Title from "../components/shared/Title";
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

function AllPosts () {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return (
    <Container>
      <Title text="All Posts" backButton={false} />
      <Content>
        { !data && <Loading /> }
        { error && <Card>An error has ocurred :( </Card>}
        { data && data.map(post => (<Post key={post.id} post={post} />)) }
      </Content>
    </Container>
  );
}

export default AllPosts;