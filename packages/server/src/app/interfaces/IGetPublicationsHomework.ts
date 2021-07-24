import { Publications } from '@models/firebase/Publications';
import { Homework } from '@models/mysql/Homework';
import { PublicationsFormated } from '../../../../types';

export type FormatStudentHomeworksPayload = {
  homeworks: Homework[];
  publications: Publications[];
};

export interface IGetPublicationsHomework {
  getData(userId: string): Promise<PublicationsFormated[]>;
}
