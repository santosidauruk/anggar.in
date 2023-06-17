const investmentLength = ({
  interestPerYear,
  currentValue,
  futureValue,
  monthlyContribution,
}) => {
  const interestPerMonth = interestPerYear / 100 / 12;
  // NOTE: don't know how to name these, forgive me
  const a = interestPerMonth * futureValue + monthlyContribution;
  const b = interestPerMonth * currentValue + monthlyContribution;
  const c = Math.log(a / b);
  const d = Math.log(1 + interestPerMonth);

  return c / d;
};

export { investmentLength };
