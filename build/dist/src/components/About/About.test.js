import * as React from 'react';
import App from './';
import * as renderer from 'react-test-renderer';
it('renders without crashing', function () {
    var rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=About.test.js.map