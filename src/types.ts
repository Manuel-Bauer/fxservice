export interface ExchangeRates {
  USD: number;
  JPY: number;
  BGN: number;
  CZK: number;
  DKK: number;
  GBP: number;
  HUF: number;
  PLN: number;
  RON: number;
  SEK: number;
  CHF: number;
  ISK: number;
  NOK: number;
  HRK: number;
  TRY: number;
  AUD: number;
  BRL: number;
  CAD: number;
  CNY: number;
  HKD: number;
  IDR: number;
  ILS: number;
  INR: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NZD: number;
  PHP: number;
  SGD: number;
  THB: number;
  ZAR: number;
}

export interface ExchangeRateResult {
  time: string;
  rates: ExchangeRates;
}

export interface Rate {
  currency: string;
  rate: number;
}
