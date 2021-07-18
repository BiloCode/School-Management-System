import { Request, Response } from 'express';
import Logger from '@utils/Logger';

//Implementar la interface 'Controller'
class Authentication {
  start(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      // Validar el usuario
      // Generar el token (jwt)
      // 

    } catch (error) {
      Logger.error(error);
      res.status(500).json({ message: error.message });
    }
  }


}

export default Authentication;