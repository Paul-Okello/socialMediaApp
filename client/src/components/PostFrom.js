import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { Button, Form, FormInput } from "semantic-ui-react";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import { useForm } from "../util/hooks";

function PostFrom() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: "",
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.body = "";
    },
  });
  function createPostCallback() {
    createPost();
  }
  return (
    <Form onSubmit={onSubmit}>
      <h2>Create a post...</h2>
      <Form.Field>
        <FormInput
          placeholder="Hi World"
          name="body"
          onChange={onChange}
          value={values.body}
        />
        <Button type="submit" color="brown">
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
}
const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostFrom;
