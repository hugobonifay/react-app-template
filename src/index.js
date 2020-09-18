import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import CustomThemeProvider from "./Theme/CustomThemeProvider";
import { appName, appVersion, copyright } from './utilities';

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <CssBaseline />
      <App />
    </CustomThemeProvider>
  </Provider>,
  document.getElementById('root')
);

console.log(appName, appVersion);
console.log(copyright);