import * as React from 'react';
import LogIn from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<LogIn />).toJSON();
  expect(rendered).toBeTruthy();
});

