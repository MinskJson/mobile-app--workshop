import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

export default () => <Provider store={store}>
  <AppRouter />
</Provider>;
