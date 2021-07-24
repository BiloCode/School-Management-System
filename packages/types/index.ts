import DateRangeType from './src/DateRangeType';
import FilePermissionType from './src/FilePermissionType';
import FileType from './src/FileType';
import FirebaseFileType from './src/FirebaseFileType';
import FirebaseImage from './src/FirebaseImage';
import PersonStateType from './src/PersonStateType';
import PublicationType from './src/PublicationType';
import RelationshipType from './src/RelationshipType';
import SchoolGradeType from './src/SchoolGradeType';
import UserType from './src/UserType';
import PublicationsFormated from './src/PublicationsFormated';

export {
  DateRangeType,
  FilePermissionType,
  FileType,
  FirebaseFileType,
  FirebaseImage,
  PersonStateType,
  PublicationType,
  RelationshipType,
  SchoolGradeType,
  UserType,
  PublicationsFormated,
};

//MYSQL TYPES
import IClassroomStudent from './src/models/mysql/IClassroomStudent';
import IStudentTutors from './src/models/mysql/IStudentTutors';
import IDirector from './src/models/mysql/IDirector';
import IHomework from './src/models/mysql/IHomework';
import IStudent from './src/models/mysql/IStudent';
import ITeacher from './src/models/mysql/ITeacher';
import ITutor from './src/models/mysql/ITutor';
import IUser from './src/models/mysql/IUser';

export {
  IClassroomStudent,
  IDirector,
  IHomework,
  IStudent,
  ITeacher,
  ITutor,
  IUser,
  IStudentTutors,
};

//FIREBASE TYPES
import IClassroom from './src/models/firebase/IClassroom';
import IClassroomCalendar from './src/models/firebase/IClassroomCalendar';
import IFileSection from './src/models/firebase/IFileSection';
import IPublications from './src/models/firebase/IPublications';
import ISchool from './src/models/firebase/ISchool';
import ISystemStorage from './src/models/firebase/ISystemStorage';

export {
  IClassroom,
  ISchool,
  IPublications,
  IFileSection,
  IClassroomCalendar,
  ISystemStorage,
};
