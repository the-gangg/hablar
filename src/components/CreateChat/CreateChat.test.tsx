import * as React from 'react';
import CreateChat from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<CreateChat />).toJSON();
  expect(rendered).toBeTruthy();
});

