import { IGetHomeworksByUserId } from '@interfaces/IGetHomeworksByUserId';
import { HomeworksByUserIdPayload } from '@localtypes/HomeworksByUserIdPayload';
import { ClassroomStudentPerYear } from '@models/mysql/ClassroomStudentPerYear';
import { Homework } from '@models/mysql/Homework';
import { Student } from '@models/mysql/Student';
import { User } from '@models/mysql/User';
import { createQueryBuilder } from 'typeorm';

export default class GetHomeworksByUserIdService
  implements IGetHomeworksByUserId
{
  async getData(data: HomeworksByUserIdPayload) {
    const response = await createQueryBuilder(Homework, 'h')
      .innerJoin(ClassroomStudentPerYear, 'c', 'c.studentId = h.studentId')
      .innerJoin(Student, 's', 's.id = c.studentId')
      .innerJoin(User, 'u', 'u.id = s.userId')
      .where(`u.id = '${data.userId}'`)
      .andWhere(`c.year = '${data.year}'`)
      .getMany();
    return response;
  }
}
