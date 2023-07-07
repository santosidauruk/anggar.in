const calculatePayment = ({
  futureAmount,
  period,
  initialCapital,
  interest,
}) => {
  // NOTE: don't know how to name these, forgive me
  const a = Math.pow(1 + interest, period);
  const b = initialCapital * a;

  const c = interest * (b - futureAmount);
  const d = 1 - a;

  const res = c / d;
  return res <= 0 ? 0 : res;
};

const payment = ({
  targetAmount,
  inflation,
  period,
  initialCapital,
  interestPerYear,
}) => {
  const returnPerYear = interestPerYear / 100;
  const returnPerMonth = returnPerYear / 12;
  const futureAmount = targetAmount * Math.pow(1 + inflation / 100, period);

  const yearlyPayment = calculatePayment({
    futureAmount,
    interest: returnPerYear,
    period,
    initialCapital,
  });

  const monthlyPayment = calculatePayment({
    futureAmount,
    interest: returnPerMonth,
    period: period * 12,
    initialCapital,
  });

  return {
    monthlyPayment,
    yearlyPayment,
  };
};

export { payment };
