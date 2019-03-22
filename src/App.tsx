import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';
import { i18n } from './i18n';
import { I18nextProvider } from "react-i18next";

export default () => <Provider store={store}>
  <I18nextProvider i18n={i18n}>
    <AppRouter />
  </I18nextProvider>
</Provider>;
