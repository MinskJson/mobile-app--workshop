import React from 'react';

type ButtonProps = {
  name: string;
}

const Button = ({name}: ButtonProps) => {
  return <button>{name}</button>;
}

export {
  Button
}