import styled from 'styled-components';
import useSWR from "swr";
import { Link, useParams } from "react-router-dom";

import fetcher from '../utils/fetcher';
import Title from '../components/shared/Title';
import Actions from '../components/shared/Actions';
import Post from "../components/posts/Post";
import Card from "../components/shared/Card";
import Loading from "../components/shared/Loading";
import CommentsList from '../components/posts/CommentsList';
import { H1 } from "../components/shared/Text";

const Container = styled.div`
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  color: black;
`;

function PostPage () {
  const params = useParams();

  const { data: post, postError } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    fetcher
  );

  const { data: comments, commentsError } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`,
    fetcher
  );

  return (
    <Container>
      <Title text="Single Post" />
      { (postError || commentsError) && <Card>An error has ocurred :( </Card> }
      { (!post || !comments) && <Loading /> } 

      <Content>
        { post && (
          <>
            <Post post={post} />
            <Actions>
              <Link to="/">{'<< '} All posts</Link>
              <Link to={`/author/${post.userId}`}>More posts from this author {' >'}</Link>
            </Actions>            
          </>
        )}

        { !comments && <Loading /> }
        { comments && (
          <>
            <CommentsList comments={comments} />
          </>
        )}
      </Content>

      
    </Container>
  );
}

export default PostPage;