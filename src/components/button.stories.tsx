import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

storiesOf('X Button', module)
  .add('with text', () => <Button name={"Hello Button"}></Button>)
  .add('with some emoji', () => (
    <Button name={"😀 😎 👍 💯"}/>
));
