import Publications from '@models/firebase/Publications';
import { Homework } from '@models/mysql/Homework';

type FormatStudentHomeworks = {
  homeworks: Homework[];
  publications: Publications[];
};

export const FormatStudentHomeworks = (data: FormatStudentHomeworks) => {
  console.log(data.homeworks);
  console.log(data.publications);
};
