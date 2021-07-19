import { HomeworksByUserIdPayload } from '@localtypes/HomeworksByUserIdPayload';
import { IHomework } from '../../../../types';

export interface IGetHomeworksByUserId {
  getData(data: HomeworksByUserIdPayload): Promise<IHomework[] | null>;
}
