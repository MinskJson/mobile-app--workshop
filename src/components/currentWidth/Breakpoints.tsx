import React, { useContext } from "react";
import { WidthProvider, WidthContext } from './CurrentWidth';

const Breakpoints = ({children}: {children: any}) => {
  return <WidthProvider>
    {children}
    </WidthProvider>
}

const Mobile = ({children}: {children: any}) => {
  const width = useContext(WidthContext);
  return width >= 0 && width <= 600 && children;
}

const Tablet = ({children}: {children: any}) => {
  const width = useContext(WidthContext);
  return width >= 600 && width <= 800 && children;
}

const Desctop = ({children}: {children: any}) => {
  const width = useContext(WidthContext);
  return width >= 800 && children;
}

Breakpoints.Mobile = Mobile;
Breakpoints.Tablet = Tablet;
Breakpoints.Desctop = Desctop;

export {
  Breakpoints
}