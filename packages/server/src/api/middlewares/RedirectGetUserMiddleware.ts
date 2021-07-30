import { Request, Response } from 'express';
import { urlBase } from '@config/urlBase';

export const RedirectGetUserController = (
  req:Request,
  res:Response,
) => {
  const { userId, userType } = req.body;
  if (!userId && !userType) {
    res.status(404).json({ message: 'No hay usuario' });
    return;
  }
  // Quitar estas lineas en caso de ser innecesarias
  // req.body.userId = userId;
  // -----------------------------------------------
  const route = `${urlBase}/auth/${userType}?userId=${userId}`;
  res.redirect(route);
};
