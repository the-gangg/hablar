import { HermesRoutes } from './constants';

import Messages from '../components/Messages';
import Contacts from '../components/Contacts';
import Settings from '../components/Settings';

interface HermesRoute {
  name: string;
  path: string;
  component: (props: any) => any;
  screen: boolean;
  exact: boolean;
}

const homeRoutes: Array<HermesRoute> = [
  {
    name: 'Messages',
    path: HermesRoutes.MESSAGES,
    component: Messages,
    screen: false,
    exact: true,
  },
  {
    name: 'Contacts',
    path: HermesRoutes.CONTACTS,
    component: Contacts,
    screen: false,
    exact: true,
  },
  {
    name: 'Settings',
    path: HermesRoutes.SETTINGS,
    component: Settings,
    screen: false,
    exact: true,
  },
];

export const DEFAULT_ROUTE_PATH = homeRoutes[0].path;

export default homeRoutes;