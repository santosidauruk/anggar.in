const futureValue = ({ interestPerYear, period, payment, initialCapital }) => {
  const interestRatePerMonth = interestPerYear / 100 / 12;
  const a = Math.pow(1 + interestRatePerMonth, period * 12);
  const b = initialCapital * a;
  const c = a - 1;
  const d = (payment * c) / interestRatePerMonth;

  return b + d;
};

const resFutureValue = futureValue({
  initialCapital: 1000000,
  payment: 2000000,
  interestPerYear: 7.25,
  period: 1,
});

console.log(resFutureValue, 'resFutureValue');
// export { futureValue };
