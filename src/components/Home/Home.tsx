import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route, Switch } from 'react-router-native';

import Nav from '../Nav';
import Messages from '../Messages';
import Settings from "../Settings";
import AddMessage from '../AddMessage';
import Header from '../Header';
import Chat from '../Chat';
import LanguagePanel from '../LanguagePanel';

import styles from './styles';

export default class Home extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.routes}>
          <Switch>
            <Route exact path="/messages" component={Messages} />
            <Route path="/addMessage" component={AddMessage} />
            <Route path="/settings" component={Settings} />
            <Route path="/chat/:chatName" component={Chat} />
            <Route path="/languagePanel" component={LanguagePanel} />
          </Switch>
        </View>
        <Nav />
      </View>
    );
  }
}
