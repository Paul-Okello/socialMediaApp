import React from "react";
import { Card, Icon, Label, Image } from "semantic-ui-react";
import moment from "moment";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://static.wikia.nocookie.net/avatar/images/e/e1/Zaheer.png/revision/latest/top-crop/width/360/height/360?cb=20140825190111"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Buttons</p>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
