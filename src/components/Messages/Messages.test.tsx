import * as React from 'react';
import Messages from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Messages />).toJSON();
  expect(rendered).toBeTruthy();
});

