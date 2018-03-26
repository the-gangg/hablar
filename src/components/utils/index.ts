// import PrivateRoute from './PrivateRoute';
export const toTitleCase = (str: string) => str.replace(/\w\S*/g, (txt: string) => (txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
