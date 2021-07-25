import { Controller } from '@localtypes/Controller';
import GetPublicationsByClassroomIdService from '@services/firebase/GetPublicationsByClassroomIdService';
import FormatStudentHomeworks from '@services/FormatStudentHomeworks';
import GetPublicationsHomework from '@services/GetPublicationsHomeworkFormated';
import GetAllClassroomStudent from '@services/mysql/GetAllClassroomStudent';
import { Request, Response } from 'express';

export default class GetPublicationsHomeworkFormated implements Controller {
  async start(request: Request, response: Response) {
    const { userId, userType } = request.body;

    try {
      const getPublicationsHomework = new GetPublicationsHomework(
        new GetAllClassroomStudent(),
        new GetPublicationsByClassroomIdService(),
        new FormatStudentHomeworks()
      );

      const publicationsFormated = await getPublicationsHomework.getData(
        userId
      );

      return response.status(200).json(publicationsFormated);
    } catch {
      return response.status(404).json({
        error: '',
      });
    }
  }
}
