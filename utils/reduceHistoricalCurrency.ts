import { groupBy } from "ramda";

export function reduceHistorcialCurrency(dates: string[], values: number[]) {
  let historicalDates: string[] = [];
  let historicalRates: number[] = [];

  type DateValue = {
    date: string;
    value: number;
  };

  const dateValuesArray: DateValue[] = [];

  dates.forEach((date, index) => {
    dateValuesArray.push({
      date,
      value: values[index],
    });
  });

  const groupByYear = groupBy<DateValue>(({ date }) => date.split("-")[0]);

  const grouped = groupByYear(dateValuesArray);

  Object.keys(grouped).forEach((year) => {
    const yearRecords = [
      ...(grouped[year]?.slice(0, 1) || []),
      ...(grouped[year]?.slice(-1) || []),
    ];

    yearRecords?.forEach((record) => {
      historicalDates.push(record.date);
      historicalRates.push(record.value);
    });
  });

  return {
    datesCollection: historicalDates,
    ratesCollection: historicalRates,
  };
}
