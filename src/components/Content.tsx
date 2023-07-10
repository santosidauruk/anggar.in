import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FINAL_INVESTMENT } from '@/constants/investmentTypes';
import useCalculation from '@/hooks/useCalculation';
import CalcResult from './results';
import Form from './forms';
import { InvestmentType } from '@/types/result';

const ResultExporter = dynamic(() => import('./resultExporters'), {
  loading: () => <p>Loading...</p>,
});

const Content = () => {
  const [activeTab, setActiveTab] = useState<InvestmentType>(FINAL_INVESTMENT);
  const { calcData, dispatch } = useCalculation();
  const isHaveResult = !!calcData[activeTab].result;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:mb-6 max-w-screen-xl mx-auto my-0">
      <div>
        <Form
          setActiveTab={setActiveTab}
          calcData={calcData}
          dispatch={dispatch}
        ></Form>
      </div>
      <div className="rounded-lg bg-purple-100 grid grid-rows-[auto_1fr_auto]">
        <CalcResult
          isHaveResult={isHaveResult}
          activeType={activeTab}
          data={calcData[activeTab]}
        />

        <ResultExporter
          isHaveResult={isHaveResult}
          data={calcData[activeTab]}
          activeType={activeTab}
        />
      </div>
    </div>
  );
};

export default Content;
