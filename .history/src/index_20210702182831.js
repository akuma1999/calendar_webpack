import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './Service/Translate/i18next';
import { Provider } from 'react-redux';
import ConfigureStore from './Redux/ConfigureStore';
import Root from './Page/Root';

const store = ConfigureStore();
ReactDOM.render(
  // <Provider store={store}>
    // <I18nextProvider i18n={i18n}>
      <Router>
        <Root />
      </Router>
    // </I18nextProvider>
  // </Provider>,
  document.getElementById('root')
);
