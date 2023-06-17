const calculatePayment = ({
  targetAmount,
  inflation,
  period,
  initialCapital,
  interest,
}) => {
  const futureValue = targetAmount * Math.pow(1 + inflation / 100, period);
  // NOTE: don't know how to name these, forgive me
  const a = Math.pow(1 + interest, period * 12);
  const b = initialCapital * a;

  const c = interest * (b - futureValue);
  const d = 1 - a;

  return c / d;
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

  const yearlyPayment = calculatePayment({
    targetAmount,
    interest: returnPerYear,
    inflation,
    period,
    initialCapital,
  });
  const monthlyPayment = calculatePayment({
    targetAmount,
    interest: returnPerMonth,
    inflation,
    period: period * 12,
    initialCapital,
  });

  return {
    monthlyPayment,
    yearlyPayment,
  };
};

export { payment };
