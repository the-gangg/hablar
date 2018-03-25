import * as React from 'react';
import Nav from './';
import * as renderer from 'react-test-renderer';
it('renders without crashing', function () {
    var rendered = renderer.create(<Nav />).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=Nav.test.js.map