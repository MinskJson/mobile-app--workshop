import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Page } from './Page';

storiesOf('Page', module)
  .add('just page', () => <Page>
    <Page.Header />
    <Page.Content>
      Hello
    </Page.Content>
    <Page.Footer />
  </Page>);