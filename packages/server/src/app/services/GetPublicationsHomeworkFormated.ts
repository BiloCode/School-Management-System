import { PublicationsFormated } from '@system/types';
import GetAllClassroomStudent from './mysql/GetAllClassroomStudent';
import GetPublicationsByClassroomIdService from './firebase/GetPublicationsByClassroomIdService';
import { IGetPublicationsHomework } from '@interfaces/IGetPublicationsHomework';
import { IGetAllClassroomStudent } from '@interfaces/IGetAllClassroomStudent';
import { IGetPublicationsByClassroomId } from '@interfaces/IGetPublicationsByClassroomId';
import { IFormatStudentHomeworks } from '@interfaces/IFormatStudentHomeworks';

export default class GetPublicationsHomework
  implements IGetPublicationsHomework
{
  public constructor(
    private _GetAllClassroomStudent: IGetAllClassroomStudent,
    private _GetPublicationsByClassroom: IGetPublicationsByClassroomId,
    private _FormatStudentHomeworks: IFormatStudentHomeworks
  ) {}

  async getData(userId: string) {
    const { classroomId, homework } =
      await this._GetAllClassroomStudent.getData(userId);

    const currentPublications = await this._GetPublicationsByClassroom.getData(
      classroomId
    );

    const publicationsFormated = this._FormatStudentHomeworks.formatData({
      homeworks: homework,
      publications: currentPublications,
    });

    return publicationsFormated;
  }
}
