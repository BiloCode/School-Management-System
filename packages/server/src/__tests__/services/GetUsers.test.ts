import { GetDirector } from '@services/mysql/GetDirector';
import { GetTeacher } from '@services/mysql/GetTeacher';
import { GetStudent } from '@services/mysql/GetStudent';
// Supertest
import request from 'supertest';
import express from 'express';

import mysqlInitialize from '@config/mysql';
import { server } from '../../server';

const createUserResponse = (
  dayOfBirth, dni, fullName, id, password, profileImage,
) => ({
  dayOfBirth, dni, fullName, id, password, profileImage,
});

describe('Get Information Users (Services)', () => {
  const app = express();

  beforeEach(async () => {
    await mysqlInitialize();
    await server(app);
  });
  const ExpectedData = {
    director: {
      email: 'director1@gmail.com',
      id: 'aaaabbbbccccdddd',
      phone: '123456789',
      user: createUserResponse('2021-07-07', '12345678', 'Imanol Mayo', '123456789', 'admin123',
        '{name:shino best waifu,url:https://pbs.twimg.com/media/Ewnqxt3XEAQzTmH.jpg}'),
    },
    student: {
      id: '000000001',
      state: 'active',
      user: createUserResponse('2021-07-07', '12345670', 'Arupaka', '111111112', 'admin123',
        '{name:shino best waifu,url:https://pbs.twimg.com/media/Ewnqxt3XEAQzTmH.jpg}'),
    },
    teacher: {
      email: 'prosor1@gmail.com',
      id: 'aaaabbbbcccchhhh',
      nickname: 'Prosor One',
      phone: '123456789',
      state: 'active',
      user: createUserResponse('2021-07-07', '12345679', 'Bily Paredes', '111111111', 'admin123',
        '{name:shino best waifu,url:https://pbs.twimg.com/media/Ewnqxt3XEAQzTmH.jpg}'),
    },
  };

  // test('Get Director User', async () => {
  //   const userDirectorId = '123456789';
  //   const directorData = await new GetDirector().getData(userDirectorId);
  //   expect(directorData).toEqual(ExpectedData.director);
  // });
  // test('Get Student User', async () => {
  //   const userStudentId = '111111112';
  //   const studentData = await new GetStudent().getData(userStudentId);
  //   expect(studentData).toEqual(ExpectedData.student);
  // });
  // test('Get Teacher User', async () => {
  //   const userTeacherId = '111111111';
  //   const studentData = await new GetTeacher().getData(userTeacherId);
  //   expect(studentData).toEqual(ExpectedData.teacher);
  // });

  /**
   * Retornar usuario mediante un token enviado
   */
  test('Retrieve user by token', async (done) => {
    const requestTokenValidate = await request(app);

    request(app)
      .get('/auth/tokenValidate')
      .set('authorization', 'tokenByFrontEnd')
      .expect('Content-type', /json/)
      .expect(200, done);
  });
});
