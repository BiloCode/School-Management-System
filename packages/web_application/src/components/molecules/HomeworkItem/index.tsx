import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';
import { TColor } from '../../../styles/text';
import { HomeworkState } from '../../../styles/homework';
import { IconType } from '../../../styles/icons';
import Icon from '../../atoms/Icon';

type TProps = {
  course: string;
  date: string;
  state?: HomeworkState;
};

const HomeworkItem = ({ course, date, state }: TProps) => {
  const textCourseColor: keyof typeof TColor =
    state === HomeworkState.lated ? 'RED' : 'BLACK';

  const iconState: keyof typeof IconType =
    state === HomeworkState.lated ? 'HOMEWORK_LATED' : 'HOMEWORK_OK';

  return (
    <S.Container>
      <S.IconContainer>
        <Icon icon={iconState} />
      </S.IconContainer>
      <S.DetailCourse>
        <Text weight="BOLD" color={textCourseColor}>
          {course}
        </Text>
        <Text size="SMALL">Se entregó el {date}</Text>
      </S.DetailCourse>
    </S.Container>
  );
};

export default HomeworkItem;
