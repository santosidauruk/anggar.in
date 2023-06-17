import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import FinalInvestment from './forms/FinalInvestment';
import InvestmentPeriod from './forms/InvestmentPeriod';
import SavingInvestment from './forms/SavingInvestment';
import {
  FINAL_INVESTMENT,
  INVESTMENT_PERIOD,
  SAVING_INVESTMENT,
} from '@/constants/investmentTypes';
import { InvestmentType } from '@/types/result';
import useCalculation from '@/hooks/useCalculation';
import CalcResult from './results';
import ExportResult from './ExportResult';

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
    label: 'Bulanan & Tahunan',
    key: SAVING_INVESTMENT,
  },
];

const Content = () => {
  const [activeTab, setActiveTab] = useState<InvestmentType>(FINAL_INVESTMENT);
  const { data: calc, dispatch } = useCalculation();
  const isHaveResult = !!calc[activeTab].result;

  useEffect(() => {
    console.log(calc, 'result');
  }, [calc]);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:mb-6">
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
                    'grid items-center text-neutral-800 py-5 md:py-8 px-6 w-full text-center ui-selected:bg-white ui-selected:text-neutral-800 ui-selected:outline-none',
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
                data={calc['finalInvestment']}
              />
            </Tab.Panel>
            <Tab.Panel>
              <InvestmentPeriod
                setResult={(res) =>
                  dispatch({ type: INVESTMENT_PERIOD, payload: res })
                }
                data={calc['investmentPeriod']}
              />
            </Tab.Panel>
            <Tab.Panel>
              <SavingInvestment
                setResult={(res) =>
                  dispatch({ type: SAVING_INVESTMENT, payload: res })
                }
                data={calc['savingInvestment']}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="rounded-lg bg-purple-100 grid grid-rows-[auto_1fr_auto]">
        <div className="px-9 py-4 md:py-8 font-bold text-sm md:text-2xl border-b border-neutral-400 text-center md:text-left">
          <h2>Hasil Perhitungan</h2>
        </div>
        {/* Empty States */}
        {!isHaveResult ? (
          <div className="p-5 flex justify-center items-center flex-col">
            <div className="relative w-[144px] h-[157px]">
              <Image src={'/empty-calc-form.png'} alt={'empty-form'} fill />
            </div>
            <h4 className="text-purple-400 text-sm md:text-xl text-center mt-3 max-w-[250px]">
              Lengkapi form disamping untuk mendapatkan hasil
            </h4>
          </div>
        ) : (
          <div className="py-7 px-4 md:p-8">
            <CalcResult type={activeTab} data={calc[activeTab]} />
          </div>
        )}

        {/* <ExportResult isHaveResult={isHaveResult} /> */}
      </div>
    </div>
  );
};

export default Content;
