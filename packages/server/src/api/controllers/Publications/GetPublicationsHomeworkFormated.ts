import { Controller } from '@localtypes/Controller';
import GetPublicationsByClassroomIdService from '@services/firebase/GetPublicationsByClassroomIdService';
import FormatStudentHomeworks from '@services/FormatStudentHomeworks';
import GetHomeworksByUserIdService from '@services/mysql/GetHomeworksByUserIdService';
import { Request, Response } from 'express';
import PublicationsFormated from '../../../../../types/src/PublicationsFormated';

export default class PublicationsHomeworkFormated implements Controller {
  async start(request: Request, response: Response) {
    const { userId, userType } = request.body;

    try {
      const getHomeworksByUserIdService = new GetHomeworksByUserIdService();
      const currentHomeworks = await getHomeworksByUserIdService.getData(
        'user_0001'
      );

      const getPublicationsByClassroomIdService =
        new GetPublicationsByClassroomIdService();

      const currentPublications =
        await getPublicationsByClassroomIdService.getData('classroom_0001');

      const formatStudentHomeworks = new FormatStudentHomeworks();

      const publicationsFormated: PublicationsFormated[] =
        formatStudentHomeworks.formatData({
          homeworks: currentHomeworks,
          publications: currentPublications,
        });

      return response.status(200).json(publicationsFormated);
    } catch {
      return response.status(404).json({
        error: '',
      });
    }
  }
}
