import { Link } from "react-router-dom";

import Card from "../shared/Card";
import { H2 } from "../shared/Text";

function Post ({ post }) {

  return (
    <Card>
      <H2>
        <Link to={`/${post.id}`}>
          {post.title}
        </Link>
      </H2>
      <p>{post.body}</p>
    </Card>
  );
};

export default Post;