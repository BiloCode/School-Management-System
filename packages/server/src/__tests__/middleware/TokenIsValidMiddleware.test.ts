// import express from 'express';
// import request from 'supertest';

// import { TokenIsValidMiddleware } from '@middlewares/TokenIsValidMiddleware';
// import { server } from '../../server';

// describe('Token validate middleware', () => {
//   const app = express();

//   beforeEach(async () => {
//     await server(app);
//   });

//   test('Expect token undefined', (done) => {
//     app.use(TokenIsValidMiddleware);

//     request(app)
//       .get('/')
//       .expect('Content-Type', /json/)
//       .expect(404, { message: 'Token undefined' })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }

//         return done();
//       });
//   });
// });
