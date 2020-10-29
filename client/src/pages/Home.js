import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import { FETCH_POSTS_QUERY } from "../util/graphql";

const Home = () => {
  let posts = "";
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    posts = data.getPosts;
  }
  return (
    <Grid columns="three" style={{ margin: "10px" }}>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      {loading ? (
        <h1>loading posts...</h1>
      ) : (
        posts &&
        posts.map((post) => (
          <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}
    </Grid>
  );
};

export default Home;
