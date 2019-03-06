import * as React from "react";
import './content.css';

type PageType = {
  children: React.ReactChild | React.ReactChild[]
}

const Content = ({children}: PageType) => {
  return <div className="content">
    {children}
  </div>
}

export {
  Content
}