import { Director } from '@models/mysql/Director';
import { Teacher } from '@models/mysql/Teacher';
import { Student } from '@models/mysql/Student';

export interface IGetDirector {
    getData(userId:string):Promise<Director|null>;
}

export interface IGetTeacher {
    getData(userId:string):Promise<Teacher|null>;
}

export interface IGetStudent {
    getData(userId:string):Promise<Student|null>;
}
