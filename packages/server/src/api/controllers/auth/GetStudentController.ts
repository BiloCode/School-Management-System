import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';
import { GetStudent } from '@services/mysql/GetStudent';

export class GetStudentController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { userId } = req.body;
      const studentData = await new GetStudent().getData(userId);
      if (!studentData) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json({
        studentData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}
