import { IPublications } from '../../../../types';

export interface IGetPublicationsByClassroomId {
  getData(clasroomId: string): Promise<IPublications[] | null>;
}
