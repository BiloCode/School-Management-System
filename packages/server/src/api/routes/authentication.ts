import { Router } from 'express';
import { AuthenticationUserMiddleware } from '@middlewares/AuthenticationMiddleware';

const app = Router();

app.post('/student', AuthenticationUserMiddleware, () => console.log('Student'));
app.post('/teacher', AuthenticationUserMiddleware, () => console.log('Student'));
app.post('/director', AuthenticationUserMiddleware, () => console.log('Student'));

export default app;
