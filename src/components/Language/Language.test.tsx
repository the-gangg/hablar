import * as React from 'react';
import Language from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Language onValueChange={(value: string) => { value; }} language='en' />).toJSON();
  expect(rendered).toBeTruthy();
});

