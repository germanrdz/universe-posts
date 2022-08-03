import styled from "styled-components";
import useSWR from "swr";
import { Link, useParams } from "react-router-dom";

import fetcher from '../utils/fetcher';
import Title from "../components/shared/Title";
import Actions from '../components/shared/Actions';
import Post from "../components/posts/Post";
import Loading from "../components/shared/Loading";
import Card from "../components/shared/Card";

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  color: black;
`;

function AuthorPosts () {
  const { authorId } = useParams();

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  const authorPosts = (data || []).filter(post => post.userId.toString() === authorId);

  return (
    <>
      <Title text={`Author ${authorId} Posts`} />
      <Content>
        { !data && <Loading /> }
        { error && <Card>An error has ocurred :( </Card>}
        { data && authorPosts.length === 0 && <Card>This author does not have any posts.</Card>}

        { data && authorPosts && (
          <>
            { authorPosts.map(post => (<Post key={post.id} post={post} />)) }
            <Actions>
              <Link to="/">{'<< '} All posts</Link>
            </Actions>
          </>
        )};
      </Content>
    </>
  );
    
}

export default AuthorPosts;