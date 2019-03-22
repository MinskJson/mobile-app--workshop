import React, { useEffect, useState, useCallback, createContext } from "react";

export const currentWidth = (ref?: HTMLBaseElement) => {
  const [width, setWidth] = useState(0);
  const currentElement = ref || window;
  const onResize = useCallback((e) => {
    // @ts-ignore
    setWidth(currentElement.clientWidth || currentElement.innerWidth);
  }, [currentElement]);

  useEffect(() => {
    // @ts-ignore
    setWidth(currentElement.clientWidth || currentElement.innerWidth);
    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [currentElement]);

  return width;
}


export const WidthContext = createContext(0);

export const WidthProvider = ({children}: {children: any}) => {
  const width = currentWidth();
  console.log(width);
  return <WidthContext.Provider
    value={width}>
    {children}
  </WidthContext.Provider>
}
