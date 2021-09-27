import { Column, Entity, ManyToOne } from 'typeorm';

import { IClassroomStudent } from '@school/types';
import { Student } from './Student';

@Entity()
export class ClassroomStudent implements IClassroomStudent {
  @ManyToOne(() => Student, { primary: true })
  student: Student;

  @Column({ type: 'varchar', primary: true })
  classroomId: string;

  @Column({ type: 'varchar' })
  year: string;
}
