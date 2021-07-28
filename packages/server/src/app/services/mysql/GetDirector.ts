import { getRepository } from 'typeorm';
import { Director } from '@models/mysql/Director';
import { IGetDirector } from '@interfaces/IGetUsers';
import { on } from 'events';

export class GetDirector implements IGetDirector {
  async getData(userId) {
    try {
      const directorRepository = getRepository(Director);
      const directorReceived = await directorRepository.findOne({
        where: {
          id: userId,
        },
        join: {
          alias: 'director',
          leftJoinAndSelect: {
            user: 'director.user',

          },

        },
      });
      if (typeof directorReceived !== 'undefined') return directorReceived as Director;
      return null;
    } catch (error) {
      return null;
    }
  }
}
