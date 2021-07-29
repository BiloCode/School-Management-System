import { NextFunction, Request, Response } from 'express';
import AuthenticationUser from '@services/mysql/AuthenticationUser';
import ComparePasswordWithBcrypt from '@services/ComparePassword';
import CreateToken from '@services/CreateToken';

export const AuthenticationUserMiddleware = async (
  req: Request,
  res: Response,
  next:NextFunction,
) => {
  const {
    dni, password, userType, userId,
  } = req.body;

  if (userId) {
    req.body.userId = userId;
    next();
    return;
  }

  const userIdResponse = await new AuthenticationUser(new ComparePasswordWithBcrypt())
    .authentication(dni as string, password as string);
  if (!userIdResponse) {
    res.status(404).json({ message: 'Usuario no encontrado' });
    return;
  }

  const tokenGenerated = new CreateToken().create(userIdResponse as string, userType);
  if (!tokenGenerated) {
    res.status(500).json({ message: 'No se pudo crear el token' });
    return;
  }
  req.body.tokenGenerated = tokenGenerated;
  req.body.userId = userIdResponse;
  next();
};

export default AuthenticationUserMiddleware;
