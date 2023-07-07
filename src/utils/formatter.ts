export const formatToNumberValue = (value: string) =>
  Number(value.replace(/\D/g, ''));

export const formatToCurrency = (num: number) =>
  new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
  }).format(num);

export const formatCurrency = (value: string) => {
  const rawValue = formatToNumberValue(value);
  const formattedValue = formatToCurrency(rawValue);
  return formattedValue;
};
