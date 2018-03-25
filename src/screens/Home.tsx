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
  <View style={styles.homeContainer}>
    <Header />
    <View style={styles.routes}>
      <Switch>
        <Route exact path="/messages" component={Messages} />
        <Route path="/addMessage" component={CreateChat} />
        <Route path="/settings" component={Settings} />
        <Route path="/chat/:chatName" component={Chat} />
        <Route path="/languagePanel" component={LanguagePanel} />
      </Switch>
    </View>
    <Nav />
  </View>
);

export default Home;
