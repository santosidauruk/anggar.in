import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Input';
import { futureValue } from '@/utils/formula';
import { CalculationResult } from '@/types/result';
import { formatCurrency, formatToNumberValue } from '@/utils/formatter';
import { MAX_RETURN, MAX_YEARS } from '@/constants/index';

const schema = z.object({
  monthlySaving: z.string().min(1, 'Silakan isi jumlah investasi setiap bulan'),
  currentSaving: z.string().min(1, 'Silakan isi jumlah dana saat ini'),
  timePeriod: z
    .number({
      invalid_type_error: 'Silakan isi lama waktu yang kamu inginkan',
      required_error: 'Silakan isi lama waktu yang kamu inginkan',
    })
    .max(MAX_YEARS, `Periode waktu maksimal ${MAX_YEARS} tahun`),
  assumedReturn: z
    .string()
    .min(1, 'Silakan isi asumsi return investasi')
    .regex(/^\d+(\,\d+)?$/, 'Return hanya boleh diisi dengan angka dan koma')
    .refine((val) => parseFloat(val.replace(',', '.')) <= MAX_RETURN, {
      message: `Asumsi return investasi maksimal ${MAX_RETURN}%`,
    }),
});

export type FinalInvestmentInputs = z.infer<typeof schema>;

interface Props {
  setResult: (data: CalculationResult['finalInvestment']) => void;
  data: CalculationResult['finalInvestment'];
}

const FinalInvestment = ({ setResult, data }: Props) => {
  const methods = useForm<FinalInvestmentInputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const onSubmit = methods.handleSubmit((data) => {
    const f = futureValue({
      initialCapital: formatToNumberValue(data.currentSaving),
      period: data.timePeriod,
      interestPerYear: data.assumedReturn,
      payment: formatToNumberValue(data.monthlySaving),
    });
    setResult({ result: Math.floor(f), ...data });
  });

  return (
    <div>
      <h3 className="pt-5 md:pt-9 pb-8 md:pb-9 px-4 md:px-9 text-sm md:text-2xl font-bold text-neutral-800 text-left">
        Kalkulator Nilai Investasi Akhir
      </h3>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="px-4 md:px-9 pb-11 grid grid-cols-1 gap-6">
            <Input
              prefix="Rp"
              label="Jumlah yang mau kamu investasikan tiap bulan"
              id="monthlySaving"
              type="text"
              onChange={(e) => {
                e.target.value = formatCurrency(e.target.value);
                return;
              }}
            />
            <Input
              prefix="Rp"
              label="Jumlah dana kamu saat ini"
              id="currentSaving"
              type="text"
              onChange={(e) => {
                e.target.value = formatCurrency(e.target.value);
                return;
              }}
            />
            <Input
              suffix="Tahun"
              label="Berapa lama lagi kamu mau mimpimu terwujud?"
              id="timePeriod"
              type="number"
            />
            <Input
              suffix="% /Tahun"
              label="Asumsi return investasi kamu"
              id="assumedReturn"
              type="text"
            />
          </div>
          <div className="border-t-neutral-400 border-t grid justify-items-center px-5 grid-cols-1 text-xs lg:text-base">
            <button
              type="submit"
              className="text-white bg-purple-700 font-medium rounded-lg px-10 py-3 md:py-5 my-5 w-full lg:w-[400px]"
            >
              Ukur mimpimu
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FinalInvestment;
