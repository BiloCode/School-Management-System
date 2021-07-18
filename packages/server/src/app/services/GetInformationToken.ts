import jwt from 'jsonwebtoken';

import TokenIsCaduced from '@services/TokenIsCaduced';
import TokenFormatIsValid from '@services/TokenFormatIsValid';

class GetInformationToken {
  getInformation(token: string) {
    const tokenValid = new TokenFormatIsValid().getToken(token);
    if (!tokenValid) return null;

    const isTokenCorrect = new TokenIsCaduced().isCaduced(tokenValid);
    if (!isTokenCorrect) return null;

    const tokenInformation = jwt.decode(tokenValid);
    return tokenInformation;

  }


}

export default GetInformationToken;