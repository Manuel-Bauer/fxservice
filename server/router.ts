import express from 'express';
import { getFxrates } from './controller';

const Router = express.Router;
// @ts-ignore
const router = new Router();

router.get('/fxrates', getFxrates);

export default router;
