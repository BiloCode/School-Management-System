import { Homework } from '@models/mysql/Homework';

export interface IGetAllClassroomStudent {
  getData(userId: string): Promise<{
    classroomId: string;
    homework: Homework[];
  }>;
}
