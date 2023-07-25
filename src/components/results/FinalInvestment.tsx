import React from 'react';
import Image from 'next/image';
import { CalculationResult } from '@/types/result';
import { formatToCurrency } from '@/utils/formatter';

const FinalInvestmentResult = ({
  data,
}: {
  data: CalculationResult['finalInvestment'];
}) => {
  return (
    <React.Fragment>
      <div className="p-4 md:pl-8 md:py-6 pr-14 md:pr-28 rounded-md bg-purple-400 relative mb-5">
        <h3 className="text-xs md:text-sm text-neutral-600">
          Hasil investasi kamu setelah {data.timePeriod} tahun
        </h3>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-1 md:mt-2 [word-break:break-word]">
          Rp {formatToCurrency(data.result)}
        </h2>
        <div className="absolute right-0 bottom-0 overflow-hidden w-[85px] h-[85px] md:w-[110px] md:h-[110px]">
          <Image
            fill
            src={'/icon_saving.png'}
            alt="investasi akhir icon"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-4 md:pl-8 md:py-6 rounded-md bg-purple-400 relative">
        <h3 className="text-neutral-800 font-bold text-sm md:text-base mb-2">
          Penjelasan
        </h3>
        <p className="text-xs md:text-sm text-neutral-600 leading-[18px] md:mt-2">
          Nilai diatas merupakan ilustrasi nilai hasil investasi akhir jika kamu
          melakukan investasi rutin perbulan selama periode waktu tertentu
          dengan asumsi return investasi yang kamu inginkan.
        </p>
      </div>
    </React.Fragment>
  );
};

export default FinalInvestmentResult;
