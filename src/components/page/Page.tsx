import * as React from "react";
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Content } from './content/Content';

type PageType = {
  children: React.ReactChild[]
}

const Page = ({children}: PageType) => {
  return <div>
    {children}
  </div>
};

Page.Header = Header;
Page.Footer = Footer;
Page.Content = Content;

export {
  Page
}