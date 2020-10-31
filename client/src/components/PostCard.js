import React, { useContext } from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/auth";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const { user } = useContext(AuthContext);
  function likePost() {
    console.log("Like Post");
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://static.wikia.nocookie.net/avatar/images/e/e1/Zaheer.png/revision/latest/top-crop/width/360/height/360?cb=20140825190111"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="brown" basic>
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" as={Link} to={`/posts/${id}`}>
          <Button color="blue" basic>
            <Icon name="comment" />
            Comment
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          <Button
            as="div"
            color="red"
            floated="right"
            onClick={() => console.log("Delete Post")}
          >
            <Icon name="trash" style={{ margin: "0" }} />
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
