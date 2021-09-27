import * as React from 'react';
import * as S from './styles';

import Text from '../../atoms/Text';

import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { Pressable } from 'react-native';

type TProps = {
  day: string;
  month: string;
  description?: string;
};

const AssistanceItem = ({ day, month, description }: TProps) => (
  <Pressable>
    {({ pressed }) => (
      <S.Container pressed={pressed}>
        <S.Circle>
          <Text weight="BLACK" size={TSize.MEDIUM} color={TColor.WHITE}>
            {day}
          </Text>
        </S.Circle>
        <S.TextContainer>
          <Text weight="BOLD">Mes de {month}</Text>
          <Text size="VERY_SMALL">
            {description ? description : 'Inasistencia injustificada'}
          </Text>
        </S.TextContainer>
      </S.Container>
    )}
  </Pressable>
);

export default AssistanceItem;
