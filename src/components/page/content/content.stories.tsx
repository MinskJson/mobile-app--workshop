import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Content } from './Content';

const longArr = new Array(10000).fill(0).map((e, index) => index);
storiesOf('Page Content', module)
  .add('just content', () => <Content>
    {longArr.map(e => (
      <div key={e}>{e}</div>
    ))}
  </Content>);