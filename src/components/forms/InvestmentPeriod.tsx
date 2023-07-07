import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../Input';
import { formatCurrency, formatToNumberValue } from '@/utils/formatter';
import { investmentLength } from '@/utils/formula';
import { CalculationResult } from '@/types/result';

interface Props {
  setResult: (data: CalculationResult['investmentPeriod']) => void;
  data: CalculationResult['investmentPeriod'];
}

const schema = z.object({
  savingTarget: z.string(),
  currentSaving: z.string(),
  monthlySaving: z.string(),
  assumedReturn: z.string().regex(/^\d+(\,\d+)?$/),
});

export type InvestmentPeriodInputs = z.infer<typeof schema>;

const InvestmentPeriod = ({ setResult, data }: Props) => {
  const methods = useForm<InvestmentPeriodInputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
    shouldUnregister: false,
  });

  const onSubmit = methods.handleSubmit((data) => {
    const period = investmentLength({
      futureValue: formatToNumberValue(data.savingTarget),
      currentValue: formatToNumberValue(data.currentSaving),
      interestPerYear: data.assumedReturn,
      monthlyContribution: formatToNumberValue(data.monthlySaving),
    });
    setResult({ result: Math.ceil(period), ...data });
  });

  return (
    <div>
      <h3 className="pt-5 md:pt-9 pb-8 md:pb-9 px-4 md:px-9 text-sm md:text-2xl font-bold text-neutral-800 text-left">
        Kalkulator Periode Investasi
      </h3>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div className="px-4 md:px-9 pb-11 grid grid-cols-1 gap-6">
            <Input
              prefix="Rp"
              label="Target tabungan masa depan yang ingin dicapai?"
              id="savingTarget"
              type="text"
              onChange={(e) => {
                e.target.value = formatCurrency(e.target.value);
                return;
              }}
            />
            <Input
              prefix="Rp"
              label="Jumlah yang bisa ditabung setiap bulan?"
              id="monthlySaving"
              type="text"
              onChange={(e) => {
                e.target.value = formatCurrency(e.target.value);
                return;
              }}
            />
            <Input
              prefix="Rp"
              label="Jumlah tabungan saat ini?"
              id="currentSaving"
              type="text"
              onChange={(e) => {
                e.target.value = formatCurrency(e.target.value);
                return;
              }}
            />
            <Input
              suffix="% /Tahun"
              label="Asumsi return investasi"
              id="assumedReturn"
              type="string"
            />
          </div>
          <div className="border-t-neutral-400 border-t grid justify-items-center px-5 grid-cols-1 text-xs lg:text-base">
            <button
              type="submit"
              className="text-white bg-purple-700 font-medium rounded-lg px-10 py-3 md:py-5 my-5 w-full lg:w-[400px]"
            >
              Ukur Mimpimu
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default InvestmentPeriod;
