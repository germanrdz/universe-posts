import styled from "styled-components";
import useSWR from "swr";
import { Link, useParams, useNavigate } from "react-router-dom";

import fetcher from '../utils/fetcher';
import Actions from '../components/shared/Actions';
import Post from "../components/posts/Post";
import Loading from "../components/shared/Loading";
import Card from "../components/shared/Card";
import { H1 } from "../components/shared/Text";

const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  color: black;
`;

function AuthorPosts () {
  const { authorId } = useParams();
  const navigate = useNavigate();

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher, 
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const authorPosts = (data || []).filter(post => post.userId.toString() === authorId);

  return (
    <>
      <H1>Author {authorId} Posts</H1>
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