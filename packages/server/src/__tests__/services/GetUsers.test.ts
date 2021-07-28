import { GetDirector } from '@services/mysql/GetDirector';
import { GetTeacher } from '@services/mysql/GetTeacher';
import { GetStudent } from '@services/mysql/GetStudent';
import mySqlConnection from '@config/mysql';

describe('Get Information Users', () => {
  test('Get Director User', async () => {
    await mySqlConnection();
    const directorId = 'aaaabbbbccccdddd';
    const directorData = await new GetDirector().getData(directorId);
    expect(directorData).toBe(null);
  });
});
