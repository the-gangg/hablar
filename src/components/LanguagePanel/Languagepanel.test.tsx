import * as React from 'react';
import LanguagePanel from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<LanguagePanel />).toJSON();
  expect(rendered).toBeTruthy();
});
