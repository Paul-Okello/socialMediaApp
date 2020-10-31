import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";
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
    <Grid columns="three" style={{ margin: "10px" }}>
      <Grid.Row className="home__title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      {user && (
        <Grid.Column>
          <PostForm />
        </Grid.Column>
      )}
      {loading ? (
        <h1>loading posts...</h1>
      ) : (
        <Transition.Group duration={200}>
          {posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ marginBottom: "20px" }}>
                <PostCard post={post} />
              </Grid.Column>
            ))}
        </Transition.Group>
      )}
    </Grid>
  );
};

export default Home;
