import * as React from 'react';
import { NativeRouter } from 'react-router-native';

import App from './components/App';

const HermesApp = () => (
  <NativeRouter>
    <App />
  </NativeRouter>
);

export default HermesApp;