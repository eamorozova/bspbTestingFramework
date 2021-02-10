import { CardsPage } from './cards.page';
import { OverviewPage } from './overview.page';
import { StartPage } from './start.page';

export const pageProvider = (page) => ({
  cards: () => new CardsPage(page),
  overview: () => new OverviewPage(page),
  start: () => new StartPage(page),
});
