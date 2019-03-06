import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Header } from './Header';

storiesOf('Page Header', module)
  .add('just header', () => <Header />);