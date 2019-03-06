import * as React from 'react';
import { UserGroup } from './UserGroup';
import './user.css';

type UserProps = {
  img: string,
  name: string,
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => any,
  isCircle?: boolean,
}

const User = ({img, name, isCircle, onClick}:UserProps) => {
  return <div className="user" onClick={onClick}>
    <div className={`user-circle user-circle--${isCircle}`}>
      <img className="user-circle__img" src={img} />
    </div>
    <div className="user-name">{
      name
    }</div>
  </div>
}

User.Group = UserGroup;

export {
  User
}