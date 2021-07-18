import TokenFormatIsValid from '@services/TokenFormatIsValid';
import TokenIsCaduced from '@services/TokenIsCaduced';

import TokenIsValidMiddleware from '@middlewares/TokenIsValidMiddleware';
import request from 'supertest';

import express from 'express';
import { server } from 'server';

describe('Token Validation', () => {

  const validToken = 'Bearer asdasxawax';
  const invalidToken = 'asdasdasd';


  const app = server(express());

  test('Validate if the token middleware works correctly', (done) => {
    request(app)
      .post('/auth/')
      .set('Accept', 'Application/json')
      .expect(200)
      .end((error) => {
        done(error)
      })

  })

})