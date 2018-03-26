import * as React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';

import Nav from '../components/Nav';
import Messages from '../components/Messages';
import Settings from '../components/Settings';
import CreateChat from '../components/CreateChat';
import Header from '../components/Header';
import Chat from '../components/Chat';
import LanguagePanel from '../components/LanguagePanel';

import styles from './styles';

const Home = () => (
  <View>
    <Header style={styles.homeHeader} />
    <View style={styles.custom}>
      <Switch >
        <Route exact path="/messages" component={Messages} />
        <Route path="/addMessage" component={CreateChat} />
        <Route path="/settings" component={Settings} />
        <Route path="/chat/:chatName" component={Chat} />
        <Route path="/languagePanel" component={LanguagePanel} />
      </Switch>
    </View>
    <Nav style={styles.homeNav} />
  </View >
);

export default Home;
