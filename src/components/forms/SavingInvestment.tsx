import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Input';
import { formatCurrency, formatToNumberValue } from '@/utils/formatter';
import * as z from 'zod';
import { payment } from '@/utils/formula';
import { CalculationResult } from '@/types/result';

const schema = z.object({
  savingTarget: z
    .string()
    .min(1, { message: 'Silakan isi target investasi yang ingin dicapi' }),
  currentSaving: z
    .string()
    .min(1, { message: 'Silakan isi jumlah dana saat ini' }),
  timePeriod: z.number({
    invalid_type_error: 'Silakan isi lama waktu yang kamu inginkan',
    required_error: 'Silakan isi lama waktu yang kamu inginkan',
  }),
  inflation: z.string().regex(/^\d+(\,\d+)?$/),
  assumedReturn: z.string().regex(/^\d+(\,\d+)?$/),
});

export type SavingInvestmentInputs = z.infer<typeof schema>;

interface Props {
  setResult: (data: CalculationResult['savingInvestment']) => void;
  data: CalculationResult['savingInvestment'];
}

const SavingInvestment = ({ setResult, data }: Props) => {
  const methods = useForm<SavingInvestmentInputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const onSubmit = methods.handleSubmit((data) => {
    const { monthlyPayment, yearlyPayment } = payment({
      inflation: parseFloat(data.inflation.replaceAll(',', '.')),
      initialCapital: formatToNumberValue(data.currentSaving),
      period: data.timePeriod,
      targetAmount: formatToNumberValue(data.savingTarget),
      interestPerYear: parseFloat(data.assumedReturn.replaceAll(',', '.')),
    });

    setResult({
      result: {
        monthlyPayment: Math.floor(monthlyPayment),
        yearlyPayment: Math.floor(yearlyPayment),
      },
      ...data,
    });
  });
  return (
    <div>
      <h3 className="pt-5 md:pt-9 pb-8 md:pb-9 px-4 md:px-9 text-sm md:text-2xl font-bold text-neutral-800 text-left">
        Kalkulator Investasi Berkala
      </h3>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="px-4 md:px-9 pb-11 grid grid-cols-1 gap-6">
            <Input
              prefix="Rp"
              label="Target dana yang ingin kamu capai"
              id="savingTarget"
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
              label="Asumsi inflasi tahunan"
              id="inflation"
              type="text"
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

export default SavingInvestment;
