import { GetDirector } from '@services/mysql/GetDirector';
import { GetTeacher } from '@services/mysql/GetTeacher';
import { GetStudent } from '@services/mysql/GetStudent';

export const GetUserServices = {
  director: new GetDirector(),
  teacher: new GetTeacher(),
  student: new GetStudent(),
};
