import PublicationsHomeworkFormated from '@controllers/Publications/GetPublicationsHomeworkFormated';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

app.get(
  '/',

  AdapterController(PublicationsHomeworkFormated)
);

export default app;
