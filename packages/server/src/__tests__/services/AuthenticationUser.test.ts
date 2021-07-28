import AuthenticationUser from '@services/mysql/AuthenticationUser';
import mysqlConnection from '@config/mysql';
import ComparePasswordWithBcrypt from '@services/ComparePassword';

describe('User Services', () => {
  test('Authentication User', async () => {
    await mysqlConnection();
    const response = await new AuthenticationUser(new ComparePasswordWithBcrypt())
      .authentication('12345678', 'admin123');

    expect(response).toBe('123456789'); // Correct credentials
  });
});
