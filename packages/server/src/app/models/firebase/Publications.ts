import { Collection } from 'fireorm';
import {
  DateRangeType,
  FirebaseFileType,
  PublicationType,
} from '@school/types';

@Collection()
export class Publications {
  id: string;
  classroomId: string;
  name: string;
  description: string;
  type: PublicationType;
  files: FirebaseFileType[];
  limitDate: DateRangeType;
}
