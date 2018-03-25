import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-native';

import { createContext } from '../../components/utils/test_utils';

import Home from '../Home';


it('renders without crashing', () => {
  const rendered = renderer.create(<StaticRouter context={createContext()}><Home /></StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});
