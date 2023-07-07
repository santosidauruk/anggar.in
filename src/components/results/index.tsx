import React from 'react';
import { InvestmentType } from '@/types/result';
import FinalInvestmentResult from './FinalInvestment';
import InvestmentPeriodResult from './InvestmentPeriod';
import SavingInvestmentResult from './SavingInvestment';
import EmptyResult from './EmptyResult';

const COMPONENT_RESULT = {
  finalInvestment: FinalInvestmentResult,
  investmentPeriod: InvestmentPeriodResult,
  savingInvestment: SavingInvestmentResult,
};

interface Props {
  activeType: InvestmentType;
  data: any;
  isHaveResult: boolean;
}

const CalcResult = ({ activeType, data, isHaveResult }: Props) => {
  const DisplayedResult = COMPONENT_RESULT[activeType];

  return (
    <React.Fragment>
      <div className="px-9 py-4 md:py-8 font-bold text-sm md:text-2xl border-b border-neutral-400 text-center md:text-left">
        <h2>Hasil Perhitungan</h2>
      </div>
      {!isHaveResult ? (
        <EmptyResult />
      ) : (
        <div className="py-7 px-4 md:p-8">
          <DisplayedResult data={data} />
        </div>
      )}
    </React.Fragment>
  );
};

export default CalcResult;
