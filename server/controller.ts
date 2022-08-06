import axios from 'axios';
import xml2js from 'xml2js';
import { ExchangeRateResult } from './types';

export async function parse(string: string) {
  const result = await xml2js.parseStringPromise(string);
  const time = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['$']['time'];
  const ratesArray: any = result['gesmes:Envelope']['Cube'][0]['Cube'][0][
    'Cube'
  ].map((rate: any) => rate['$']);
  const ratesObject: any = {};

  ratesArray.forEach((rate: any) => {
    ratesObject[rate.currency] = rate.rate;
  });

  const data = {
    time: time,
    rates: ratesObject,
  };
  return data;
}

export async function getAllFxrates(): Promise<any> {
  const result = await axios.get(
    'http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'
  );

  const rates = parse(result.data);
  return rates;
}
