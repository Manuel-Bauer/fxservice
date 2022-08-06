import express from 'express';
import { getAllFxrates } from './controller';

const Router = express.Router;
// @ts-ignore
const router = new Router();

router.get('/fxrates', getAllFxrates);

export default router;
