import * as React from 'react';
import Chat from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Chat {...{ chatName: 'test', match: { params: {} } }} />).toJSON();
  expect(rendered).toBeTruthy();
});

