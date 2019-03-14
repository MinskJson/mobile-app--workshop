import React, { useEffect, useState, useCallback } from "react";
import { Page } from "../../../components/page/Page";
import './recursion.css';

type MenuItemType = {
  text: string;
  children: MenuItemType[];
}
const MenuItem = ({text, children}: {text: string, children: MenuItemType[]}) => {
  return <div className='menu-item'>
    <b>{text}</b>
    {children && <div className='menu-item__items'>
      {children.map((e: MenuItemType) => <MenuItem key={text + e.text} {...e}/>)}
    </div>
    }
  </div>
}
const Menu = ({children}: {children: MenuItemType[]}) => {
  return <div>
    <b>Menu</b>
    {children.map((e: MenuItemType) => <MenuItem key={e.text} {...e}/>)}
  </div>
}

const children = [{
  text: '1',
  children: [{
    text: '2',
    children: [{
      text: '3',
      children: [{
        text: '4',
        children: [{
          text: '5',
        }]
      }]
    },
    {
      text: '6',
      children: [{
        text: '7',
        children: [{
          text: '8',
        }]
      }]
    }]
  }]
}]
const Recursion = () => {
  return <Page>
    <Page.Header/>
    <Page.Content>
      <Menu children={children} />
    </Page.Content>
    <Page.Footer/>
  </Page>
};

export {
  Recursion
}