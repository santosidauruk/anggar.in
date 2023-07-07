import React, { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import html2canvas from 'html2canvas';
import ExportedFinalInvestment from './FinalInvestment';
import ExportedInvestmentPeriod from './InvestmentPeriod';
import ExportedSavingInvestment from './SavingInvestment';
import { CalculationResult } from '@/types/result';

interface Props {
  isHaveResult: boolean;
  data: any;
  activeType: keyof CalculationResult;
}

const Component: Record<keyof CalculationResult, React.FC<any>> = {
  finalInvestment: ExportedFinalInvestment,
  savingInvestment: ExportedSavingInvestment,
  investmentPeriod: ExportedInvestmentPeriod,
};

const ExportResult = ({ isHaveResult, data, activeType }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const ExportedResult = Component[activeType];

  const onSaveClick = useCallback(() => {
    html2canvas(ref.current).then((canvas) => {
      const dataUrl = canvas.toDataURL();
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `generated_${new Date().toLocaleString()}`;
      link.click();
    });
  }, [ref]);

  return (
    <React.Fragment>
      <div
        id="exportedResult"
        className="fixed opacity-0 pointer-events-none -z-0"
      >
        <div ref={ref} className="w-[600px] p-9 bg-white">
          <h2 className="text-2xl font-bold mb-8">Kalkulator Mimpi ✨</h2>
          <ExportedResult data={data} />
        </div>
      </div>
      <div className="border-t-neutral-400 border-t grid justify-items-center px-4 grid-cols-1 text-xs lg:text-base">
        <button
          type="submit"
          className={clsx(
            'border font-medium rounded-lg px-10 py-3 md:py-5 my-5 w-full lg:w-[400px]',
            isHaveResult
              ? 'text-purple-700 border-purple-700'
              : 'text-neutral-400 border-neutral-400'
          )}
          onClick={onSaveClick}
        >
          Simpan Sebagai PDF 🗒
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExportResult;
