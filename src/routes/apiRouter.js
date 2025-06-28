import express from "express";
import v2Router from './v2/v2Routes.js';
import v1Router from './v1/v1Routes.js';

const router = express.Router();

router.use('/v2',v2Router);

router.use('/v1', v1Router);


export default router;