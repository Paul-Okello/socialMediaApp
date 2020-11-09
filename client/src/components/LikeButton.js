import React, { useEffect, useState } from "react";

function LikeButton({ post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }, [user, likes]
  });
  return (
    <Button as="div" labelPosition="right" onClick={likePost}>
        <Button color="brown" basic>
        <Icon name="heart" />
        Like
        </Button>
        <Label as="a" basic color="red" pointing="left">
        {likeCount}
        </Label>
    </Button>
  )
}

export default LikeButton;
