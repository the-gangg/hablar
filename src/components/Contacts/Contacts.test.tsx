import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Contacts from './';

it('renders without crashing', () => {
  const rendered = renderer.create(<Contacts />).toJSON();
  expect(rendered).toBeTruthy();
});

