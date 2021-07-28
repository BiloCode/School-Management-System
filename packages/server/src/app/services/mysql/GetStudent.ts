import { getRepository } from 'typeorm';
import { User } from '@models/mysql/User';
import { Student } from '@models/mysql/Student';
import { IGetStudent } from '@interfaces/IGetUsers';

export class GetStudent implements IGetStudent {
  async getData(userId) {
    return null;
  }
}
