import { Controller } from '@localtypes/Controller';
import GetPublicationsByClassroomIdService from '@services/firebase/GetPublicationsByClassroomIdService';
import GetHomeworksByUserIdService from '@services/mysql/GetHomeworksByUserIdService';
import { Request, Response } from 'express';

export default class PublicationsAndHomeworksStudent implements Controller {
  async start(request: Request, response: Response) {
    const { classroomId, year, userId, userType } = request.body;

    const getHomeworksByUserIdService = new GetHomeworksByUserIdService();
    try {
      const currentHomeworks = await getHomeworksByUserIdService.getData({
        userId: 'user_0001',
        year: '2021',
      });

      const getPublicationsByClassroomIdService =
        new GetPublicationsByClassroomIdService();

      const currentPublications =
        await getPublicationsByClassroomIdService.getData('classroom_0001');

      return response.status(200).json('a');
    } catch {
      return response.status(404).json({
        error: '',
      });
    }
  }
}
