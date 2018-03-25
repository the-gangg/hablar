import * as React from 'react';
import Conversation from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Conversation />).toJSON();
  expect(rendered).toBeTruthy();
});

