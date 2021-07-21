import { IHomework } from '../../../../types';

export interface IGetAllStudenClassroom {
  getData(userId: string): Promise<IHomework[] | null>;
}
