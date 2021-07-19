import { IGetPublicationsByClassroomId } from '@interfaces/IGetPublicationsByClassroomId';
import Publications from '@models/firebase/Publications';
import { getRepository } from 'fireorm';

export default class GetPublicationsByClassroomIdService
  implements IGetPublicationsByClassroomId
{
  async getData(clasroomId: string) {
    const classroomCalendarRepository = getRepository(Publications);
    const response = await classroomCalendarRepository
      .whereEqualTo('classroomId', clasroomId)
      .find();
    return response;
  }
}
