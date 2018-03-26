import * as React from 'react';
import { Redirect, Route, RouteProps, RouteComponentProps } from 'react-router-native';

import { HermesRoutes } from '../../config/constants';

// TODO(DEV) use lib functions to check for auth
const auth = { isAuth: () => true };

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

/**
 * Returns an unrednered React Element
 * @param Component
 * @returns {React.ComponentType}
 */
const renderFn = (Component?: RouteComponent) => {
  const Comp = (props: RouteProps) => {
    if (!Component) {
      return null;
    }

    return auth.isAuth() ? <Component {...props} />
      : <Redirect to={{ pathname: HermesRoutes.LOGIN }} />;
  };

  return Comp;
};

const PrivateRoute: React.StatelessComponent<RouteProps> = ({ component, ...rest }: RouteProps) => {
  return (
    <Route {...rest} render={renderFn(component)} />
  );
};

export default PrivateRoute;