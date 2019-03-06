import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Footer } from './Footer';

storiesOf('Page Footer', module)
  .add('just footer', () => <Footer />);