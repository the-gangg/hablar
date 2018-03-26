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

const routes: Array<HermesRoute> = [
  {
    name: 'Messages',
    path: 'messages',
    component: Messages,
    screen: false,
    exact: true,
  },
  {
    name: 'Contacts',
    path: 'contacts',
    component: Contacts,
    screen: false,
    exact: true,
  },
  {
    name: 'Settings',
    path: 'settings',
    component: Settings,
    screen: false,
    exact: true,
  },
];

export const DEFAULT_ROUTE_PATH = routes[0].path;

export default routes;