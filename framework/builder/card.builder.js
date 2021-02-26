import { randomMonth, randomNumber, randomYear } from '../config/randomNumber.config';

const Card = function BuildCard() {
  this.number = randomNumber(16);
  this.month = randomMonth();
  this.year = randomYear();
  this.CVV = randomNumber(3);
};

export { Card };
