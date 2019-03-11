import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Post } from './Post';

storiesOf('Post', module)
  .add('just post', () => <Post isLiked={false} />)
  .add('liked post', () => <Post isLiked={true} />);