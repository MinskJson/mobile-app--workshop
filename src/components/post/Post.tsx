import React, { useState, useCallback, useEffect, ReactChild, useMemo } from "react";
import {PostHeader} from './PostHeader';
import likeSvg from './like.svg';
import likeFilledSvg from './like-filled.svg';
import './Post.css';

export type PostItemType = {
  id: number;
  name: string;
  images: {
    header: string;
  },
    description:string;
    prices: {
      min: number;
      price_min: {
        amount: number;
        currency: string;
      };
      max: number;
      price_max: {
        amount: number;
        currency: string;
      }
    };
};

type PostType = {
  isLiked: boolean;
  item: PostItemType;
  query?: string;
};


const Post = ({isLiked, item, query}: PostType) => {
  const [currentLike, setCurrentLike] = useState(isLiked);

  const name = query ?
    item.name.toLowerCase().replace(query, `<b>${query}</b>`) :
    item.name;
  const onLikeClick = useCallback(() =>
    setCurrentLike(!currentLike),
    [currentLike]);

  return <div className="post post-liked">
    <PostHeader
      image="https://placeimg.com/640/480/people"
      name={name}
      address={`${item.prices.price_min.amount} ${item.prices.price_min.currency} - ${item.prices.price_max.amount} ${item.prices.price_max.currency}`} />
    <div className="post-img__wr">
      <img className="post-img__img" src={item.images.header} />
    </div>
    <div className="post-footer">
      <img src={ currentLike ? likeFilledSvg: likeSvg} onClick={onLikeClick} />
      <p>
        {item.description}
      </p>
    </div>
  </div>
}

export {
  Post
}