import React from 'react';
import Image from 'next/image';
import { CalculationResult } from '@/types/result';
import { formatToCurrency } from '@/utils/formatter';

const SavingInvestmentResult = ({
  data,
}: {
  data: CalculationResult['savingInvestment'];
}) => {
  return (
    <React.Fragment>
      <div className="p-4 md:pl-8 md:py-6 pr-14 md:pr-28 rounded-md bg-purple-400 relative mb-5">
        <h3 className="font-bold text-sm text-neutral-800">
          Detail Hasil Perhitungan
        </h3>
        <div className="flex items-center mt-3">
          <div className="relative w-[30px] h-[30px]">
            <Image
              fill
              src={'/icon_monthly_payment.png'}
              alt="investasi per bulan"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="ml-2.5">
            <p className="text-neutral-600 text-xs">
              Jumlah yang harus kamu investasikan tiap bulan
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold [word-break:break-word]">
              Rp {formatToCurrency(data.result?.monthlyPayment)}
            </h2>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="relative w-[30px] h-[30px]">
            <Image
              fill
              src={'/icon_yearly_payment.png'}
              alt="investasi per bulan"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="ml-2.5">
            <p className="text-neutral-600 text-xs">
              Jumlah yang harus kamu investasikan tiap tahun
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold [word-break:break-word]">
              Rp {formatToCurrency(data.result?.yearlyPayment)}
            </h2>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 overflow-hidden w-[85px] h-[85px] md:w-[110px] md:h-[110px]">
          <Image
            fill
            src={'/icon_money.png'}
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
          Nilai diatas merupakan ilustrasi berapa yang harus kamu investasikan
          baik bulanan atau tahunan untuk mencapai target dana yang kamu
          inginkan berdasarkan asumsi inflasi dan return investasi.
        </p>
      </div>
    </React.Fragment>
  );
};

export default SavingInvestmentResult;
