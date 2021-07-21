import { IHomework } from '../../../../types';

export interface IGetHomeworksByUserId {
  getData(userId: string): Promise<IHomework[] | null>;
}
