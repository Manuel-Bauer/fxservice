import { ExchangeRateResult } from './types';
import xml2js from 'xml2js';
import axios from 'axios';

async function parse(string: string): Promise<ExchangeRateResult> {
  const result = await xml2js.parseStringPromise(string);
  const time = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['$']['time'];

  console.log(result['gesmes:Envelope']['Cube'][0]['Cube'][0]['Cube']);

  const ratesArray = result['gesmes:Envelope']['Cube'][0]['Cube'][0][
    'Cube'
  ].map((rate: any) => rate['$']);

  const ratesObject: any = {};

  ratesArray.forEach((rate: any) => {
    ratesObject[rate.currency] = rate.rate;
  });

  const data: ExchangeRateResult = {
    time: time,
    rates: ratesObject,
  };

  return data;
}

export async function fetchFxrates(): Promise<ExchangeRateResult> {
  const result = await axios.get(
    'http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'
  );
  const rates = await parse(result.data);
  return rates;
}
