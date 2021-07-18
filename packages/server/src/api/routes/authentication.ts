import { Router } from 'express';
import TokenIsValidMiddleware from '@middlewares/TokenIsValidMiddleware';

const app = Router();

app.get('/', TokenIsValidMiddleware, () => console.log('Here goes the controller'));

export default app;