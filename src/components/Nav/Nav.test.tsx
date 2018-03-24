import * as React from 'react';
import Nav from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Nav />).toJSON();
  expect(rendered).toBeTruthy();
});
