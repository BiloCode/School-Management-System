import * as React from 'react';
import * as S from './styles';

import { IconType } from '../../../styles/icons';

import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

type IconKeys = keyof typeof IconType;

interface Props extends S.ContainerProps {
  text: string;
  icon: IconKeys;
  onPress?(): void;
}

const HomeItem: React.FC<Props> = ({ icon, text, onPress, color }) => (
  <S.Container>
    <S.HomeItemButtonContainer color={color} onTouchEnd={onPress}>
      <Icon icon={icon} />
    </S.HomeItemButtonContainer>
    <S.TextContainer>
      <Text size="SMALL" color="BLACK" weight="BOLD">
        {text}
      </Text>
    </S.TextContainer>
  </S.Container>
);

export default HomeItem;
