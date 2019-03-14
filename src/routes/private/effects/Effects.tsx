import React, { useEffect, useState, useCallback } from "react";
import { Page } from "../../../components/page/Page";
import { Empty, Button } from "antd";

const currentWidth = (ref?: HTMLBaseElement) => {
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

const ComponentSome = () => {
  return <Button>Button</Button>
}

const ComponentSomeElese = () => {
  return <Empty />
}

const ComponentSmall = () => {
  const [ref, setRef] = useState(null as any);
  const width = currentWidth(ref);
  return <div style={{width: '50%'}} ref={setRef}>
    <div>
      {width > 300 ? <ComponentSomeElese /> : <ComponentSome /> }
    </div>
  </div>
}

const Effects = () => {
  const width = currentWidth();
  return <Page>
    <Page.Header/>
    <Page.Content>
      all width: {width}
      <ComponentSmall />
    </Page.Content>
    <Page.Footer/>
  </Page>
};

export {
  Effects
}