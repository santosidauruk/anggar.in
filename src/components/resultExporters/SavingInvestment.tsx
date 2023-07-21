import React from 'react';
import SavingInvestmentResult from '@/components/results/SavingInvestment';
import { CalculationResult } from '@/types/result';

interface Props {
  data: CalculationResult['savingInvestment'];
}

const ExportedFinalInvestment = ({ data }: Props) => {
  return (
    <div className="rounded-lg bg-purple-100">
      <h3 className="text-xl font-bold p-6 border-b border-neutral-400">
        Hasil Perhitungan Investasi Berkala
      </h3>
      <div className="p-6">
        <p className="text-xs leading-loose text-neutral-600">
          Target dana yang ingin kamu capai
        </p>
        <p className="text-sm font-bold mb-6">Rp {data.savingTarget}</p>
        <p className="text-xs leading-loose text-neutral-600">
          Jumlah dana kamu saat ini
        </p>
        <p className="text-sm font-bold mb-6">Rp {data.currentSaving}</p>
        <p className="text-xs leading-loose text-neutral-600">
          Berapa lama lagi kamu mau mimpimu terwujud?
        </p>
        <p className="text-sm font-bold mb-6">{data.timePeriod} Tahun</p>
        <p className="text-xs leading-loose text-neutral-600">
          Asumsi inflasi tahunan
        </p>
        <p className="text-sm font-bold mb-6">{data.inflation} %/Tahun</p>
        <p className="text-xs leading-loose text-neutral-600">
          Asumsi return investasi kamu
        </p>
        <p className="text-sm font-bold mb-6">{data.assumedReturn} %/Tahun</p>
        <SavingInvestmentResult data={data} />
      </div>
    </div>
  );
};

export default ExportedFinalInvestment;
