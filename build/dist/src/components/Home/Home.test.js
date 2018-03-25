import * as React from 'react';
import Home from './';
import * as renderer from 'react-test-renderer';
it('renders without crashing', function () {
    var rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=Home.test.js.map