import { Controller } from '@localtypes/Controller';
import { Request, Response } from 'express';
import { GetTeacher } from '@services/mysql/GetTeacher';

export class GetTeacherController implements Controller {
  async start(req:Request, res:Response) {
    try {
      const { userId } = req.body;
      const teacherData = await new GetTeacher().getData(userId);
      if (!teacherData) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json({
        teacherData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}
