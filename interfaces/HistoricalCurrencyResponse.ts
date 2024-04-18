export interface HistoricalCurrencyResponse {
  amount: number;
  base: string;
  start_date: string;
  end_date: string;
  rates: { [key: string]: Rate };
}

export interface Rate {
  [key: string]: number;
}
