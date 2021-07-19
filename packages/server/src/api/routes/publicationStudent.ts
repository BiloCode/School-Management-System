import PublicationsAndHomeworksStudent from '@controllers/PublicationsAndHomeworksStudent/GetClassroomStudentPerYearByStudentController';
import { AdapterController } from '@utils/AdapterController';
import { Router } from 'express';

const app = Router();

app.get(
  '/',

  AdapterController(PublicationsAndHomeworksStudent)
);

export default app;
