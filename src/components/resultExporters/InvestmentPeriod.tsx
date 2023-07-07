import React from 'react';
import InvestmentPeriodResult from '@/components/results/InvestmentPeriod';
import { CalculationResult } from '@/types/result';

interface Props {
  data: CalculationResult['investmentPeriod'];
}

const ExportedInvestmentPeriod = ({ data }: Props) => {
  return (
    <div className="rounded-lg bg-purple-100">
      <h3 className="text-xl font-bold p-6 border-b border-neutral-400">
        Perhitungan Periode Investasi
      </h3>
      <div className="p-6">
        <p className="text-xs leading-loose text-neutral-600">
          Target tabungan masa depan yang ingin dicapai?
        </p>
        <p className="text-sm font-bold mb-6">Rp {data.savingTarget}</p>
        <p className="text-xs leading-loose text-neutral-600">
          Jumlah yang bisa ditabung setiap bulan?
        </p>
        <p className="text-sm font-bold mb-6">Rp {data.monthlySaving}</p>
        <p className="text-xs leading-loose text-neutral-600">
          Jumlah tabungan saat ini??
        </p>
        <p className="text-sm font-bold mb-6">{data.currentSaving} Tahun</p>
        <p className="text-xs leading-loose text-neutral-600">
          Asumsi Return Investasi
        </p>
        <p className="text-sm font-bold mb-6">{data.assumedReturn} %/Tahun</p>
        <InvestmentPeriodResult data={data} />
      </div>
    </div>
  );
};

export default ExportedInvestmentPeriod;
