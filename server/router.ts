import express from 'express';
import { getFxrate } from './controller';

const Router = express.Router;
// @ts-ignore
const router = new Router();

router.get('/fxrates', getFxrate);

export default router;
