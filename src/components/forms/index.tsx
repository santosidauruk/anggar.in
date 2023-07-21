import React, { Dispatch } from 'react';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';
import FinalInvestment from './FinalInvestment';
import InvestmentPeriod from './InvestmentPeriod';
import SavingInvestment from './SavingInvestment';
import { CalculationResult, InvestmentType } from '@/types/result';
import {
  FINAL_INVESTMENT,
  INVESTMENT_PERIOD,
  SAVING_INVESTMENT,
} from '@/constants/investmentTypes';
import type { CalcAction } from '@/hooks/useCalculation';

interface LabelTabs {
  label: string;
  key: InvestmentType;
}

const INVESTMENT_TYPES: LabelTabs[] = [
  {
    label: 'Investasi Akhir',
    key: FINAL_INVESTMENT,
  },
  {
    label: 'Periode',
    key: INVESTMENT_PERIOD,
  },
  {
    label: 'Investasi Berkala',
    key: SAVING_INVESTMENT,
  },
];

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<keyof CalculationResult>>;
  calcData: CalculationResult;
  dispatch: Dispatch<CalcAction>;
}

const Form = ({ setActiveTab, calcData, dispatch }: Props) => {
  return (
    <div>
      <Tab.Group
        onChange={(index) => setActiveTab(INVESTMENT_TYPES[index].key)}
      >
        <Tab.List
          className="grid grid-cols-3 text-xs md:text-base justify-items-center bg-purple-400 rounded-t-lg"
          style={{
            boxShadow: 'inset 2px -2px 20px rgba(63, 60, 169, 0.21)',
          }}
        >
          {INVESTMENT_TYPES.map((type, idx) => {
            return (
              <Tab
                as="div"
                key={type.key}
                className={clsx(
                  'grid items-center cursor-pointer text-neutral-800 py-5 md:py-8 px-6 w-full text-center ui-selected:bg-white ui-selected:text-neutral-800 ui-selected:outline-none',
                  {
                    'rounded-tl-lg': idx === 0,
                    'rounded-tr-lg': idx === INVESTMENT_TYPES.length - 1,
                  }
                )}
              >
                <span className="pb-1 ui-selected:pb-[2px] ui-selected:border-b-2 ui-selected:border-purple-500">
                  {type.label}
                </span>
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels as="div" className="bg-purple-100">
          <Tab.Panel>
            <FinalInvestment
              setResult={(res) =>
                dispatch({ type: FINAL_INVESTMENT, payload: res })
              }
              data={calcData['finalInvestment']}
            />
          </Tab.Panel>
          <Tab.Panel>
            <InvestmentPeriod
              setResult={(res) =>
                dispatch({ type: INVESTMENT_PERIOD, payload: res })
              }
              data={calcData['investmentPeriod']}
            />
          </Tab.Panel>
          <Tab.Panel>
            <SavingInvestment
              setResult={(res) =>
                dispatch({ type: SAVING_INVESTMENT, payload: res })
              }
              data={calcData['savingInvestment']}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Form;
