import React from 'react';
import Image from 'next/image';
import { CalculationResult } from '@/types/result';
import convertToYearAndMonths from '@/utils/convertToYearAndMonths';

const InvestmentPeriodResult = ({
  data,
}: {
  data: CalculationResult['investmentPeriod'];
}) => {
  return (
    <React.Fragment>
      <div className="p-4 md:pl-8 md:py-6 pr-14 md:pr-28 rounded-md bg-purple-400 relative mb-5">
        <h3 className="text-xs md:text-sm text-neutral-600">
          Lama kamu harus berinvestasi
        </h3>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1 md:mt-2 [word-break:break-word]">
          {convertToYearAndMonths(data.result)}
        </h2>
        <div className="absolute right-0 bottom-0 overflow-hidden w-[85px] h-[85px] md:w-[110px] md:h-[110px]">
          <Image
            fill
            src={'/icon_clock.png'}
            alt="investasi akhir icon"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-4 md:pl-8 md:py-6 rounded-md bg-purple-400 relative">
        <h3 className="text-neutral-800 font-bold text-sm md:text-base mb-2">
          Penjelasan
        </h3>
        <p className="text-xs md:text-sm text-neutral-600 leading-[18px] md:mt-2">
          Nilai diatas merupakan ilustrasi waktu yang dibutuhkan untuk mencapai
          target dana yang ingin kamu capai berdasarkan investasi rutin bulanan
          dan asumsi return investasi kamu.
        </p>
      </div>
    </React.Fragment>
  );
};
export default InvestmentPeriodResult;
