const futureValue = ({ interestPerYear, period, payment, initialCapital }) => {
  const interestRatePerMonth = interestPerYear / 100 / 12;
  // NOTE: don't know how to name these, forgive me
  const a = Math.pow(1 + interestRatePerMonth, period * 12);
  const b = initialCapital * a;
  const c = a - 1;
  const d = (payment * c) / interestRatePerMonth;

  return b + d;
};

export { futureValue };
