import { UserType } from '@school/types';

export type TokenPayload = {
  user_id: string;
  user_type: UserType;
};
