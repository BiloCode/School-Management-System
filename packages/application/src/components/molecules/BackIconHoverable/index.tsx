import * as React from 'react';
import { Pressable } from 'react-native';
import * as S from './styles';

import Icon from '../../atoms/Icon';

type Props = {
  onPress(): void;
};

const BackIconHoverable: React.FC<Props> = ({ onPress }) => (
  <Pressable onPress={onPress}>
    {({ pressed }) => (
      <S.Container pressed={pressed}>
        <Icon icon="ARROW_LEFT_B_BLACK" />
      </S.Container>
    )}
  </Pressable>
);

export default React.memo(BackIconHoverable);
