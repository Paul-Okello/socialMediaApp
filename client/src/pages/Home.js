import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import { FETCH_POSTS_QUERY } from "../util/graphql";

const Home = () => {
  const {
    loading,
    data: { getPosts: posts },
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns="three">
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      {loading ? (
        <h1>loading posts...</h1>
      ) : (
        posts &&
        posts.map((post) => (
          <Grid.Column key={post.id}>
            <PostCard post={post} />
          </Grid.Column>
        ))
      )}
    </Grid>
  );
};

export default Home;
