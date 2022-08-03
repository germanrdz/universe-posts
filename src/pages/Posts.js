import styled from "styled-components";
import { H1 } from "../components/shared/Text";
import Post from "../components/posts/Post";

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;

  color: black;
`;

function Posts () {
  return (
    <Container>
      <H1>Posts</H1>
      <Content>
        <Post />
        <Post />
        <Post />
      </Content>
    </Container>
  );
}

export default Posts;