import * as React from 'react';
import Language from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Language />).toJSON();
  expect(rendered).toBeTruthy();
});

