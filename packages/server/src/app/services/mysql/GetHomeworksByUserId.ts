import { IGetHomeworksByUserId } from '@interfaces/IGetHomeworksByUserId';
import { ClassroomStudent } from '@models/mysql/ClassroomStudent';
import { Homework } from '@models/mysql/Homework';
import { Student } from '@models/mysql/Student';
import { User } from '@models/mysql/User';
import { createQueryBuilder } from 'typeorm';

export default class GetHomeworksByUserIdService
  implements IGetHomeworksByUserId
{
  async getData(userId: string) {
    const response = await createQueryBuilder(Homework, 'h')
      .innerJoin(ClassroomStudent, 'c', 'c.studentId = h.studentId')
      .innerJoinAndMapMany('h.student', Student, 's', 's.id = c.studentId')
      .innerJoin(User, 'u', 'u.id = s.userId')
      .where(`u.id = '${userId}'`)
      .getMany();

    return response;
  }
}
