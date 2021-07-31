import { GetDirector } from '@services/mysql/GetDirector';
import { GetTeacher } from '@services/mysql/GetTeacher';
import { GetStudent } from '@services/mysql/GetStudent';
// Supertest
import request from 'supertest';
import express from 'express';

import mysqlInitialize from '@config/mysql';
import bcrypt from 'bcrypt';
import { server } from '../../server';

// Experimental imports
// --------------------

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
      user: createUserResponse('2021-07-07', '12345678', 'Imanol Mayo', '123456789',
        '$2b$10$VHqIytZwW9upQpFDgglDWu9Jhw8VGtIECBYn0m5KJUeky41KWoW0e',
        '{name:shino best waifu,url:https://pbs.twimg.com/media/Ewnqxt3XEAQzTmH.jpg}'),
    },
    student: {
      id: '000000001',
      state: 'active',
      user: createUserResponse('2021-07-07', '12345670', 'Arupaka', '111111112',
        '$2b$10$VHqIytZwW9upQpFDgglDWu9Jhw8VGtIECBYn0m5KJUeky41KWoW0e',
        '{name:shino best waifu,url:https://pbs.twimg.com/media/Ewnqxt3XEAQzTmH.jpg}'),
    },
    teacher: {
      email: 'prosor1@gmail.com',
      id: 'aaaabbbbcccchhhh',
      nickname: 'Prosor One',
      phone: '123456789',
      state: 'active',
      user: createUserResponse('2021-07-07', '12345679', 'Bily Paredes', '111111111',
        '$2b$10$VHqIytZwW9upQpFDgglDWu9Jhw8VGtIECBYn0m5KJUeky41KWoW0e',
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
   * Authenticar Usuarios
   */
  test('Authentication Student', async () => {
    const response = await request(app)
      .post('/auth/student')
      .send({ dni: '12345670', password: 'admin123', userType: 'student' })
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.userData).not.toBeNull();
    expect(response.body.tokenGenerated).not.toBeNull();
  });
  test('Authentication Teacher', async () => {
    const response = await request(app)
      .post('/auth/teacher')
      .send({ dni: '12345679', password: 'admin123', userType: 'teacher' })
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.userData).not.toBeNull();
    expect(response.body.tokenGenerated).not.toBeNull();
  });
  test('Authentication Director', async () => {
    const response = await request(app)
      .post('/auth/director')
      .send({ dni: '12345678', password: 'admin123', userType: 'teacher' })
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200);
    console.log(response.body.tokenGenerated);
    expect(response.body.userData).not.toBeNull();
    expect(response.body.tokenGenerated).not.toBeNull();
  });
  /**
   * Regresar Usuario por peticion de token
   */
  test('Get user by token', async () => {
    const response = await request(app)
      .get('/validateToken')
      .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTExMTExMTIiLCJ1c2VyVHlwZSI6InN0dWRlbnQiLCJpYXQiOjE2Mjc3NTM5OTksImV4cCI6MTYyOTA0OTk5OX0.Spq2T7f5VWZZgwTVsrxTc0nYTlSVsFDZaTMqD_aGg68')
      .expect('Content-type', /json/)
      .expect(200);
    expect(response.body.userData).not.toBeNull();
  });
});
