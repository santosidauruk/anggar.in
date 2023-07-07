import React from 'react';
import FinalInvesmentResult from '@/components/results/FinalInvestment';
import { CalculationResult } from '@/types/result';

interface Props {
  data: CalculationResult['finalInvestment'];
}

const ExportedFinalInvestment = ({ data }: Props) => {
  return (
    <div className="rounded-lg bg-purple-100">
      <h3 className="text-xl font-bold p-6 border-b border-neutral-400">
        Perhitungan Investasi Akhir
      </h3>
      <div className="p-6">
        <p className="text-xs leading-loose text-neutral-600">
          Jumlah yang bisa ditabung setiap bulan?
        </p>
        <p className="text-sm font-bold mb-6">Rp {data.monthlySaving}</p>
        <p className="text-xs leading-loose text-neutral-600">
          Jumlah tabungan saat ini?
        </p>
        <p className="text-sm font-bold mb-6">Rp {data.currentSaving}</p>
        <p className="text-xs leading-loose text-neutral-600">
          Berapa lama lagi kamu mau mimpimu terwujud?
        </p>
        <p className="text-sm font-bold mb-6">{data.timePeriod} Tahun</p>
        <p className="text-xs leading-loose text-neutral-600">
          Asumsi Return Investasi
        </p>
        <p className="text-sm font-bold mb-6">{data.assumedReturn} %/Tahun</p>
        <FinalInvesmentResult data={data} />
      </div>
    </div>
  );
};

export default ExportedFinalInvestment;
