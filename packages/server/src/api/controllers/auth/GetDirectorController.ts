import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';
import { GetDirector } from '@services/mysql/GetDirector';

export class GetDirectorController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { userId, tokenGenerated } = req.body;
      const userData = await new GetDirector().getData(userId);
      if (!userData) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json({
        userData,
        tokenGenerated,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}
