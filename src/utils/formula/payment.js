// interface PaymentParam {
//   targetAmount: number;
//   inflation: number;
//   period: number;
//   initialCapital: number;
//   interestPerYear: number;
// }

const payment = ({
  targetAmount,
  inflation,
  period,
  initialCapital,
  interestPerYear,
}) => {
  const returnPerMonth = interestPerYear / 100 / 12;
  const futureValue = targetAmount * Math.pow(1 + inflation / 100, period);
  const a = Math.pow(1 + returnPerMonth, period * 12);
  const b = initialCapital * a;

  const c = returnPerMonth * (b - futureValue);
  const d = 1 - a;

  return c / d;
};

export { payment };
