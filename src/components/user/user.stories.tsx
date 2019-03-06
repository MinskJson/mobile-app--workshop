import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { User } from './User';

const longArr = new Array(100).fill(0).map((e, index) => index);
storiesOf('User', module)
  .add('just user', () => <User img={"https://placeimg.com/640/480/people"} name="Joe Doe" />)
  .add('just user with Circle', () => <User isCircle img={"https://placeimg.com/640/480/people"} name="Joe Doe" />)
  .add('many users', () => <User.Group>
    {longArr.map(e => (
      <User
        key={e} 
        isCircle={e % 3 === 0}
        img={`https://placeimg.com/640/480/people/${e}`}
        name={`Joe Doe ${e}`} />)
    )}
  </User.Group>);