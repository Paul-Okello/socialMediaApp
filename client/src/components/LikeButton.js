import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LikeButton({ post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const likeButton = user ? (
    liked ? (
      <Button color="brown">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="brown" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="brown" basic>
      <Icon name="heart" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={likePost}>
      {likeButton}
      <Label as="a" basic color="red" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

export default LikeButton;
