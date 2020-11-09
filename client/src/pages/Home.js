import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Dimmer, Grid, Loader, Transition } from "semantic-ui-react";
import PostCard from "../components/PostCard";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import { AuthContext } from "../Context/auth";
import PostForm from "../components/PostFrom";

const Home = () => {
  const { user } = useContext(AuthContext);
  let posts = "";
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    posts = data.getPosts;
  }

  return (
    <Grid
      columns="three"
      style={{ margin: "10px" }}
      stackable
      verticalAlign="middle"
    >
      <Grid.Row className="home__title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      {user && (
        <Grid.Column>
          <PostForm />
        </Grid.Column>
      )}
      {loading ? (
        <Dimmer active>
          <Loader size="massive">Loading posts...</Loader>
        </Dimmer>
      ) : (
        <Transition.Group duration={200}>
          {posts &&
            posts.map((post) => (
              <Grid.Column
                key={post.id}
                style={{ marginBottom: "20px" }}
                mobile={16}
                tablet={8}
                computer={5}
              >
                <PostCard post={post} className="postcard" />
              </Grid.Column>
            ))}
        </Transition.Group>
      )}
    </Grid>
  );
};

export default Home;
