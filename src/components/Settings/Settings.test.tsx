import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-native';

import { createContext } from '../utils/test_utils';

import Setting from './';


it('renders without crashing', () => {
  const rendered = renderer.create(<StaticRouter context={createContext()}><Setting /></StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});
