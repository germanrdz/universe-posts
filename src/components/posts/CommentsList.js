import Card from "../shared/Card";
import Comment from "./Comment";
import { H2 } from "../shared/Text";

function CommentsList ({ comments }) {
  return (
    <Card>
      <H2>Post Comments</H2>
      { comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </Card>
  );
}

export default CommentsList;