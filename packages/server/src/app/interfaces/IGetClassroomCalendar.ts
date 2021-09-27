import { IClassroom, IClassroomCalendar } from '@school/types';

export interface IGetClassroomPayload extends Partial<IClassroom> {}

export interface IGetClassroomCalendar {
  getClassroomCalendar(
    classroom: IGetClassroomPayload
  ): Promise<IClassroomCalendar | null>;
}
