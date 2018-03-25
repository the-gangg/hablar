import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-native';

import { createContext } from '../../components/utils/test_utils';

import SignUp from '../SignUp';


it('renders without crashing', () => {
  const rendered = renderer.create(<StaticRouter context={createContext()}><SignUp /></StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});
