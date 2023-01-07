import { payment } from './payment';
import { futureValue } from './futureValue';

const resPayment = payment({
  targetAmount: 1000000,
  inflation: 5.25,
  period: 10,
  initialCapital: 0,
  returnPerYear: 4.75,
});

console.log(resPayment);
