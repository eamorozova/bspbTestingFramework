import { AccountsPage } from './accounts.page';
import { CardsPage } from './cards.page';
import { DepositsPage } from './deposits.page';
import { LoansPage } from './loans.page';
import { StartPage } from './start.page';
import { SubscriptionsPage } from './subscriptions.page';

export const pageProvider = (page) => ({
  accounts: () => new AccountsPage(page),
  cards: () => new CardsPage(page),
  deposits: () => new DepositsPage(page),
  loans: () => new LoansPage(page),
  start: () => new StartPage(page),
  subscriptions: () => new SubscriptionsPage(page),
});
