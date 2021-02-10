import { Header } from './header';
import { NavigationBar } from './navigationBar';

export const fragmentProvider = (page) => ({
  header: () => new Header(page),
  navigationBar: () => new NavigationBar(page),
});
