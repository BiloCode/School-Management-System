import { getRepository } from 'typeorm';
import { User } from '@models/mysql/User';
import { Teacher } from '@models/mysql/Teacher';
import { IGetTeacher } from '@interfaces/IGetUsers';

export class GetTeacher implements IGetTeacher {
  async getData(userId) {
    return null;
  }
}
