import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';
import { GetDirector } from '@services/mysql/GetDirector';

export class GetDirectorController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { userId } = req.body;
      const directorData = await new GetDirector().getData(userId);
      if (!directorData) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json({
        directorData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}
