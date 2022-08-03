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

const Container = styled.div`
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  color: black;
`;

function PostPage () {
  const params = useParams();

  const { data: post, error: postError } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    fetcher
  );

  const { data: comments, error: commentsError } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`,
    fetcher
  );

  const isLoading = !post && !comments && !postError && commentsError;
  const notFound = postError && postError.status === 404;

  return (
    <Container>
      <Title text="Single Post" />

      <Content>
        { isLoading && <Loading /> }
        { notFound && <Card>Post not found on server =(</Card> }      

        { !isLoading && !notFound && (
          <>
            { post && (
              <>
                <Post post={post} />
                <Actions>
                  <Link to="/">{'<< '} All posts</Link>
                  <Link to={`/author/${post.userId}`}>More posts from this author {' >'}</Link>
                </Actions>            
              </>
            )}
            { comments && <CommentsList comments={comments} /> }
          </>
        )}
      </Content>      
    </Container>
  );
}

export default PostPage;