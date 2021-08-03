// Supertest
import request from 'supertest';
import express from 'express';

import mysqlInitialize from '@config/mysql';
import { server } from '../../server';

describe('Get Information Users (Services)', () => {
  const app = express();

  beforeEach(async () => {
    await server(app);
    await mysqlInitialize();
  });

  /**
   * Authenticar Usuarios
   */
  test('Authentication User', async () => {
    const BODY_REQUEST = {
      DNI: '12345670',
      PASSWORD: 'admin123',
      USER_TYPE: 'student',
    };

    const response = await request(app)
      .post('/auth')
      .send(BODY_REQUEST)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.userData).not.toBeNull();
    expect(response.body.tokenGenerated).not.toBeNull();
  });

  /**
   * Regresar Usuario por peticion de token
   */
  test('Get user by token', async () => {
    const USER_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTExMTExMTIiLCJ1c2VyVHlwZSI6InN0dWRlbnQiLCJpYXQiOjE2Mjc5NTA5NzksImV4cCI6MTYyOTI0Njk3OX0.1_Qi83Xv0vggx-mFy7MPRKKnWT4ns6kL0mvtER-ugAc';
    const response = await request(app)
      .get('/auth/tokenValidate')
      .set('Authorization', USER_TOKEN)
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.userData).not.toBeNull();
  });
});
