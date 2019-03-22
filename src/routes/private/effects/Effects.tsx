import React, { useState } from "react";
import { Page } from "../../../components/page/Page";
import { Empty, Button } from "antd";
import { currentWidth } from "../../../components/currentWidth/CurrentWidth";

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