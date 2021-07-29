import { Router } from 'express';
import { AuthenticationUserMiddleware } from '@middlewares/AuthenticationMiddleware';
import { TokenIsValidMiddleware } from '@middlewares/TokenIsValidMiddleware';
import { RedirectGetUserController } from '@middlewares/RedirectGetUserMiddleware';
import { AdapterController } from '@utils/AdapterController';
import { GetStudentController } from '@controllers/auth/GetStudentController';
import { GetTeacherController } from '@controllers/auth/GetTeacherController';
import { GetDirectorController } from '@controllers/auth/GetDirectorController';

import { UserType } from '@system/types';

const app = Router();

app.get('/tokenValidate', TokenIsValidMiddleware, RedirectGetUserController); // Validar el Tokenapp.

app.post(`/${UserType.STUDENT}`, AuthenticationUserMiddleware, AdapterController(GetStudentController));
app.post(`/${UserType.TEACHER}`, AuthenticationUserMiddleware, AdapterController(GetTeacherController));
app.post(`/${UserType.DIRECTOR}`, AuthenticationUserMiddleware, AdapterController(GetDirectorController));

export default app;
