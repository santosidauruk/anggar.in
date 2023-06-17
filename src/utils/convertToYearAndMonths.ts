const convertToYearMonth = (numOfMonths: number): string => {
  const y = Math.floor(numOfMonths / 12);
  const m = numOfMonths % 12;
  const year = y ? `${y} tahun` : '';
  const month = m ? `${m} bulan` : '';

  return `${year} ${month}`;
};

export default convertToYearMonth;
