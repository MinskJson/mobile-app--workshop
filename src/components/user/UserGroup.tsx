import * as React from "react";
import rectangleSvg from './rectangle.svg';
import './user.css';

type UserGroupType = {
  children: React.ReactChild | React.ReactChild[]
}
const UserGroup = ({children}: UserGroupType) => {
  return <div className="user-group">
    <div className="user-group__header">
      <div className="user-group__stories">
        Stories
      </div> 
      <div className="user-group__watch-all">
        <img src={rectangleSvg} /> Watch All
      </div>
    </div>
    <div className="user-group__container">
      {children}
    </div>
  </div>
}

export {
  UserGroup
}