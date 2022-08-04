import styled from "styled-components";

import Avatar from "../shared/Avatar";

const Container = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 1em;
`;

const Message = styled.div``;

const Author = styled.div`
  font-size: 0.8em;
  color: darkgray;
`;

function Comment ({ comment }) {
  return (
    <Container>
      <Avatar email={comment.email} />
      <Message>
        {comment.body}
        <br />
        <Author>
          by {comment.name} - {comment.email}
        </Author>
      </Message>
    </Container>
  );
}

export default Comment;