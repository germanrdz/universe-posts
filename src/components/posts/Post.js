// import styled from "styled-components";
import Card from "../shared/Card";
import { H2 } from "../shared/Text";

function Post ({ post }) {
  return (
    <Card>
      <H2>{ post.title }</H2>
      <p>{ post.body }</p>
    </Card>
  );
};

export default Post;