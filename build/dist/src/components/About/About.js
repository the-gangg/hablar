import * as tslib_1 from "tslib";
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
var About = /** @class */ (function (_super) {
    tslib_1.__extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (<View style={styles.container}>
        <Text>About</Text>
        <Text>This is the about page.</Text>
      </View>);
    };
    return About;
}(React.Component));
export default About;
//# sourceMappingURL=About.js.map