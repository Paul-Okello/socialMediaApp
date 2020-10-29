import React from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://static.wikia.nocookie.net/avatar/images/e/e1/Zaheer.png/revision/latest/top-crop/width/360/height/360?cb=20140825190111"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={"/posts/`${id}`"}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color="red"
          content="Like"
          icon="heart"
          label={{
            basic: true,
            color: "red",
            pointing: "left",
            content: "2048",
          }}
        />
      </Card.Content>
    </Card>
  );
};

export default PostCard;
