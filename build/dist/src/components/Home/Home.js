import * as tslib_1 from "tslib";
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
var Home = /** @class */ (function (_super) {
    tslib_1.__extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (<View style={styles.container}>
        <Text>Open up App.ts to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>);
    };
    return Home;
}(React.Component));
export default Home;
//# sourceMappingURL=Home.js.map