import * as React from 'react';
import SignUp from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<SignUp />).toJSON();
  expect(rendered).toBeTruthy();
});

