import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';
import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { HomeworkState } from '../../../styles/homework';
import { IconType } from '../../../styles/icons';
import Icon from '../../atoms/Icon/Icon';

type TProps = {
  course: string;
  date: string;
  state?: HomeworkState;
};

const HomeworkItem = ({ course, date, state }: TProps) => {
  const textCourseColor = state === HomeworkState.lated ? TColor.RED : TColor.BLACK;
  const iconState =
    state === HomeworkState.lated ? IconType.HOMEWORK_LATED : IconType.HOMEWORK_OK;

  return (
    <S.Container>
      <S.IconContainer>
        <Icon icon={iconState} />
      </S.IconContainer>
      <S.DetailCourse>
        <Text weight={Fonts.BOLD} color={textCourseColor}>
          {course}
        </Text>
        <Text size={TSize.SMALL}>Se entregó el {date}</Text>
      </S.DetailCourse>
    </S.Container>
  );
};

export default HomeworkItem;
