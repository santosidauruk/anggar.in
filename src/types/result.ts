import { FinalInvestmentInputs } from '@/components/forms/FinalInvestment';
import { InvestmentPeriodInputs } from '@/components/forms/InvestmentPeriod';
import { SavingInvestmentInputs } from '@/components/forms/SavingInvestment';

export interface CalculationResult {
  finalInvestment: { result?: number } & FinalInvestmentInputs;
  investmentPeriod: { result?: number } & InvestmentPeriodInputs;
  savingInvestment: {
    result?: {
      yearlyPayment: number;
      monthlyPayment: number;
    };
  } & SavingInvestmentInputs;
}

export type InvestmentType = keyof CalculationResult;
