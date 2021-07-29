import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '@config/environments';
import { UserType } from '@system/types';

class CreateToken {
  create(userId:string, userType:UserType) {
    try {
      const formatData = { userId, userType };
      return jwt.sign(formatData, TOKEN_KEY, { expiresIn: '15d' });
    } catch (error) {
      return null;
    }
  }
}

export default CreateToken;
