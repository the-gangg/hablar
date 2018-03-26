import * as React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';

import Nav from '../components/Nav';
import Messages from '../components/Messages';
import Settings from '../components/Settings';
import Contacts from '../components/Contacts';
import Header from '../components/Header';
import Chat from '../components/Chat';
import LanguagePanel from '../components/LanguagePanel';

import styles from './styles';

interface HomeProps {
  location: { pathname: string }
}

const Home = ({ location: { pathname } }: HomeProps) => {
  const name = pathname.substring(1);
  return (
    <View>
      <Header style={styles.homeHeader} {...{ name }} />
      <View style={styles.custom}>
        <Switch >
          <Route exact path="/messages" component={Messages} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/settings" component={Settings} />
          <Route path="/chat/:chatName" component={Chat} />
          <Route path="/languagePanel" component={LanguagePanel} />
        </Switch>
      </View>
      <Nav style={styles.homeNav} active={name} />
    </View >
  );
};

export default Home;
