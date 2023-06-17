import React from 'react';
import { InvestmentType } from '@/types/result';
import FinalInvestmentResult from './FinalInvestmentResult';
import InvestmentPeriodResult from './InvestmentPeriodResult';
import SavingInvestmentResult from './SavingInvestmentResult';

interface Props {
  type: InvestmentType;
  data: any;
}

const COMPONENT_RESULT = {
  finalInvestment: FinalInvestmentResult,
  investmentPeriod: InvestmentPeriodResult,
  savingInvestment: SavingInvestmentResult,
};

const Result = ({ type, data }: Props) => {
  const Comp = COMPONENT_RESULT[type];
  return <Comp data={data} />;
};

export default Result;
