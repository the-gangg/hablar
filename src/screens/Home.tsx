import * as React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';

import hermesRoutes, { DEFAULT_ROUTE_PATH } from '../config/routes';

import Header from '../components/Header';
import Nav from '../components/Nav';

import styles from './styles';

interface HomeProps {
  location: { pathname: string }
}

const Home = ({ location: { pathname } }: HomeProps) => {
  const name = pathname === '/' ? DEFAULT_ROUTE_PATH : pathname.substring(1);
  return (
    <View>
      <Header style={styles.homeHeader} {...{ name }} />
      <View style={styles.custom}>
        <Switch>
          {
            hermesRoutes.map(({ exact, path, component }, i) => (
              <Route key={`home-route-${i}`} exact={exact} path={`/${path}`} component={component} />
            ))
          }
        </Switch>
      </View>
      <Nav style={styles.homeNav} active={name} />
    </View >
  );
};

export default Home;
