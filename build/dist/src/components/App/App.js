import * as tslib_1 from "tslib";
import * as React from 'react';
import { View } from 'react-native';
import { Route } from 'react-router-native';
import Nav from "../Nav";
import Home from "../Home";
import About from "../About";
import styles from './styles';
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<View style={styles.container}>
        <Nav />

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </View>);
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map