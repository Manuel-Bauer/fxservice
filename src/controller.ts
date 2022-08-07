import { fetchFxrates } from './api';
import { Request, Response } from 'express';

export async function getFxrates(req: Request, res: Response): Promise<void> {
  try {
    const rates = await fetchFxrates();
    res.status(200).send(rates);
  } catch (error) {
    res.status(500).send({
      error: 'Internal Server Error',
    });
  }
}
