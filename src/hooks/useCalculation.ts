import { Dispatch, useReducer } from 'react';
import {
  FINAL_INVESTMENT,
  INVESTMENT_PERIOD,
  SAVING_INVESTMENT,
} from '@/constants/investmentTypes';
import { InvestmentType, CalculationResult } from '@/types/result';

interface Final {
  type: 'finalInvestment';
  payload: CalculationResult['finalInvestment'];
}

interface Period {
  type: 'investmentPeriod';
  payload: CalculationResult['investmentPeriod'];
}

interface Saving {
  type: 'savingInvestment';
  payload: CalculationResult['savingInvestment'];
}

export interface StateAction {
  type: InvestmentType;
  payload: CalculationResult[InvestmentType];
}

type Act = Final | Period | Saving;

const initialResult: CalculationResult = {
  finalInvestment: {},
  investmentPeriod: {},
  savingInvestment: {},
};

const reducer = (state: CalculationResult, { type, payload }: Act) => {
  switch (type) {
    case FINAL_INVESTMENT:
      return {
        ...state,
        finalInvestment: payload,
      };
    case INVESTMENT_PERIOD:
      return {
        ...state,
        investmentPeriod: payload,
      };
    case SAVING_INVESTMENT:
      return {
        ...state,
        savingInvestment: payload,
      };
    default:
      return initialResult;
  }
};

const useCalculation = () => {
  const [data, dispatch] = useReducer(reducer, initialResult);

  return { data, dispatch };
};

export default useCalculation;
