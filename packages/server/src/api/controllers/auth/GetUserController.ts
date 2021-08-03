import { GetUserServices } from '@services/mysql/GetUserServices';
import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';

export class GetUserController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { USER_ID, USER_TYPE, TOKEN_GENERATED } = req.body;
      const userRepository = GetUserServices[USER_TYPE];
      const USER_DATA = await userRepository.getData(USER_ID as string);
      if (!USER_DATA) {
        res.status(404).json({ message: 'user not found' });
        return;
      }
      if (!TOKEN_GENERATED) {
        res.status(200).json({ USER_DATA });
        return;
      }
      res.status(200).json({
        USER_DATA,
        TOKEN_GENERATED,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
