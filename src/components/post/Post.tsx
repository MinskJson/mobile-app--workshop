import React, { useState, useCallback, useEffect } from "react";
import {PostHeader} from './PostHeader';
import likeSvg from './like.svg';
import likeFilledSvg from './like-filled.svg';
import './Post.css';

type PostType = {
  isLiked: boolean;
};


const Post = ({isLiked}: PostType) => {
  const [currentLike, setCurrentLike] = useState(isLiked);
  const [imageState, setImageState] = useState('');

  const onLikeClick = useCallback(() => 
    setCurrentLike(!currentLike), 
    [currentLike]);

  useEffect(() => {
    setTimeout(() => {
      setImageState("https://placeimg.com/640/480/people");
    }, 2000);
  }, []);

  return <div className="post post-liked">
    <PostHeader image="https://placeimg.com/640/480/people" name="Just name" address="address" />
    <div className="post-img__wr">
      {imageState && <img className="post-img__img" src="https://placeimg.com/640/480/people"/>}
    </div>
    <div className="post-footer">
      <img src={ currentLike ? likeFilledSvg: likeSvg} onClick={onLikeClick} />
    </div>
  </div>
}

export {
  Post
}