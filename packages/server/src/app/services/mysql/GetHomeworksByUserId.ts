import { IGetHomeworksByUserId } from '@interfaces/IGetHomeworksByUserId';
import { ClassroomStudent } from '@models/mysql/ClassroomStudent';
import { Homework } from '@models/mysql/Homework';
import { Student } from '@models/mysql/Student';
import { User } from '@models/mysql/User';
import { getRepository } from 'fireorm';
import { createQueryBuilder } from 'typeorm';
import { IHomework } from '../../../../../types';

export default class GetHomeworksByUserIdService
  implements IGetHomeworksByUserId
{
  async getData(userId: string) {
    /*     const repositoryHomework = getRepository(Homework);

    const response_2 = await repositoryHomework.find().inn;

    console.log(response_2); */

    /*     const response = await createQueryBuilder(Homework, 'h')
      .innerJoinAndMapMany('h.student', Student, 's', 's.id = h.studentId')
      .getMany(); */

    const response = await createQueryBuilder(Homework, 'h')
      .innerJoin(ClassroomStudent, 'c', 'c.studentId = h.studentId')
      .innerJoinAndMapMany('h.student', Student, 's', 's.id = c.studentId')
      .innerJoin(User, 'u', 'u.id = s.userId')
      .where(`u.id = '${userId}'`)
      .getMany();

    return response;
  }
}
