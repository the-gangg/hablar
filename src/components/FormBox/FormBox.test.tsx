import * as React from 'react';
import FormBox from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<FormBox name='test' inputs={[]} onSubmit={() => { }} />).toJSON();
  expect(rendered).toBeTruthy();
});

