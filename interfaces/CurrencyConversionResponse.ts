export interface CurrencyConversionResponse {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}
