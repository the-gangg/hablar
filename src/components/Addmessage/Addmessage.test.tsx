import * as React from 'react';
import AddMessage from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AddMessage />).toJSON();
  expect(rendered).toBeTruthy();
});

