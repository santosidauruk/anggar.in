const investmentLength = ({
  interestPerYear,
  presentValue,
  futureValue,
  monthlyContribution,
}) => {
  const interestPerMonth = interestPerYear / 100 / 12;
  const a = interestPerMonth * futureValue + monthlyContribution;
  const b = interestPerMonth * presentValue + monthlyContribution;
  const c = Math.log(a / b);
  const d = Math.log(1 + interestPerMonth);

  return c / d;
};

const res = investmentLength({
  interestPerYear: 5.5,
  futureValue: 133.1,
  presentValue: 100,
  monthlyContribution: 1,
});

console.log(res, 'res');
