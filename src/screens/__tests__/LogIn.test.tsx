import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-native';

import { createContext } from '../../components/utils/test_utils';

import LogIn from '../LogIn';


it('renders without crashing', () => {
  const rendered = renderer.create(<StaticRouter context={createContext()}><LogIn /></StaticRouter>).toJSON();
  expect(rendered).toBeTruthy();
});


