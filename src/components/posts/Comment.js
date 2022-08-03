import styled from "styled-components";

const Container = styled.div`
  margin: 1em 0;
`;

const Author = styled.div`
  font-size: 0.8em;
  color: darkgray;
`;

function Comment ({ comment }) {
  return (
    <Container>
      {comment.body}
      <br />
      <Author>
        by {comment.name} - {comment.email}
      </Author>
    </Container>
  );
}

export default Comment;