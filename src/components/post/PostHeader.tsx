import React from "react";

type PostHeaderTypes = {
  name: string;
  image: string;
  address: string;
}

const PostHeader = ({name, image, address}: PostHeaderTypes) => {
  return <div className="post-header">
    <svg width="100%" height="32" viewBox="0 0 355 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="b" x="-.079%" width="100.079%" height="100%">
          <use xlinkHref="#a" transform="scale(.0504)"/>
        </pattern>
        <image id="a" width="636" height="635" xlinkHref={image}/>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <circle fill="url(#b)" cx="16" cy="16" r="16"/>
        <text font-family="Helvetica" font-size="13.5" fill="#000">
          <tspan x="37" y="13">{name}</tspan>
        </text>
        <text font-family="Helvetica" font-size="11.5" fill="#000">
          <tspan x="37" y="29">{address}</tspan>
        </text>
        <path d="M353.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#000"/>
      </g>
    </svg>
  </div> 
}

export {
  PostHeader
}